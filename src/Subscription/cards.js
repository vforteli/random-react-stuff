import React, { Component } from 'react';
import CreditCardLogo from './creditcardlogo';
import { createStripeHandler } from '../Shared/StripeHandler';
import { getCurrentUser } from '../Shared/authentication';
import { ButtonLoading } from '../Shared/components';
import axios from 'axios';
import { toast } from 'react-toastify';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: false };
    }

    async componentDidMount() {
        this.stripeHandler = await createStripeHandler((token) => { this.onToken(token); });
    }


    componentWillUnmount() {
        if (this.stripeHandler) {
            this.stripeHandler.close();
        }
    }



    updateCard = () => {        
        this.stripeHandler.open({
            email: getCurrentUser().EmailAddress,
            panelLabel: 'Update card'
        });
    }


    onToken = async (token) => {
        this.setState({ loading: true });
        // validate token or let server side handle that?        
        const response = await axios.put('/api/stripe/card', { tokenId: token.id });
        if (response.status === 200) {
            toast.info('Your new card has been saved');
        }
        else {
            toast.error(`Something went haywire: ${response.statusText}`);
        }

        console.debug('update view');
        // todo update view... move this up of move card retrieval down
        this.setState({ loading: false });
    }


    render() {
        return (
            <div className="card mb-2">
                <div className="card-body">
                    <h4 className="card-title">Payment</h4>
                    <h5 className="card-subtitle mb-2 text-muted">Your current card</h5>
                    <div className="row">
                        <div className="col-sm-1">
                            <CreditCardLogo cardtype={this.props.cards.data[0].Card.brand} />
                        </div>
                        <div className="col-sm-7">
                            <strong>
                                {this.props.cards.data[0].Card.brand} <br />
                                **** **** **** {this.props.cards.data[0].Card.last4}
                            </strong>
                            <br />
                            <small>Expires: {this.props.cards.data[0].Card.exp_month} / {this.props.cards.data[0].Card.exp_year}</small>
                        </div>
                    </div>
                    <ButtonLoading loading={this.state.loading} type="button" id="updateCardButton" onClick={this.updateCard} className="btn btn-info"><i className="fas fa-edit"></i> Change card</ButtonLoading>
                </div>
            </div>
        );
    }
}

export default Cards;