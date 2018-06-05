import React, { Component } from 'react';
import axios from 'axios';
import { Charges } from './charges';
import { Cards } from './cards';
import { Subscriptions } from './subscriptions';

class Subscription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stripe: null
        };
    }

    async componentDidMount() {
        const response = await axios.get('/api/stripe/self');
        if (response.status === 200) {
            this.setState({ stripe: response.data });
        }
    }


    render() {
        return (
            <div className="container">
                <h3>Manage subscription</h3>

                {this.state.stripe === null &&
                    <div className="text-center p-3">
                        <div className="chartloading"></div>
                        <h5>Getting payment and subscription information...</h5>
                    </div>
                }

                {this.state.stripe !== null &&
                    <div className="row">
                        <div className="col-sm">
                            <Subscriptions subscriptions={this.state.stripe.subscriptions} />
                            <Cards cards={this.state.stripe.cards} />
                        </div>
                        <div className="col-sm">
                            <Charges charges={this.state.stripe.charges} />
                        </div>
                    </div>
                }

            </div>
        );
    }
}



export default Subscription;