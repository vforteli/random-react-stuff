import React from 'react';
import moment from 'moment';


export function Subscriptions(props) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h4 className="card-title">Subscription</h4>
                <h5 className="card-subtitle mb-2 text-muted">Your current subscriptions</h5>
                <div className="row">
                    <div className="col-sm-12">
                        <strong> {props.subscriptions.data[0].plan.name} </strong>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        {props.subscriptions.data[0].status === 'trialing' && <div>Trial ends:  {moment.unix(props.subscriptions.data[0].trial_end).format('YYYY MMMM DD')}<br /></div>}
                        {props.subscriptions.data[0].canceled_at === null ? 'Next payment' : 'Subscription ends'} : <strong>{moment.unix(props.subscriptions.data[0].current_period_end).format('YYYY MMMM DD')}</strong><br />
                        Amount:  {props.subscriptions.data[0].plan.amount / 100 * props.subscriptions.data[0].quantity * (props.subscriptions.data[0].tax_percent !== null ? props.subscriptions.data[0].tax_percent / 100 + 1 : 1)}   {props.subscriptions.data[0].plan.currency.toUpperCase()} <br />
                        Billing type:  {props.subscriptions.data[0].billing}
                    </div>
                </div>
                <button ng-show="stripe.subscriptions.data[0].canceled_at === null" type="button" className="btn btn-info" ng-click="confirmEndSubscription = true"><i className="fas fa-ban"></i> End Subscription</button>
            </div>
        </div>
    );
}


