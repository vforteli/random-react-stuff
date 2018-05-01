import React from 'react';
import { CreditCardLogo } from './creditcardlogo';

export function Cards(props) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h4 className="card-title">Payment</h4>
                <h5 className="card-subtitle mb-2 text-muted">Your current card</h5>
                <div className="row">
                    <div className="col-sm-1">
                        <CreditCardLogo cardtype={props.cards.data[0].Card.brand} />
                    </div>
                    <div className="col-sm-7">
                        <strong>
                            {props.cards.data[0].Card.brand} <br />
                            **** **** **** {props.cards.data[0].Card.last4}
                        </strong>
                        <br />
                        <small>Expires: {props.cards.data[0].Card.exp_month} / {props.cards.data[0].Card.exp_year}</small>
                    </div>
                </div>
                <button type="button" id="updateCardButton" className="btn btn-info"><i className="fas fa-edit"></i> Change card</button>
            </div>
        </div>
    );
}

