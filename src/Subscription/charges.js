import React from 'react';
import moment from 'moment';


export function Charges(props) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h4 className="card-title">Past charges</h4>
                {props.charges.data.length === 0 &&
                    <p className="help-block">No charges on your card yet</p>
                }

                {props.charges.data.length > 0 &&
                    <ul className="list-group">
                        {props.charges.data.map((charge, index) =>
                            <li key={index} className="list-group-item">
                                <div className="row">
                                    <div className="col-sm-5">
                                        Amount:  {charge.amount / 100} {charge.currency.toUpperCase()} <br />
                                        <small>Date: {moment.unix(charge.created).format('YYYY MMMM DD')}</small>
                                    </div>
                                    <div className="col-sm-7">
                                        <img alt="cclogo" className="cclogo" credit-card-logo-src="{charge.source.Card.brand}" />
                                        {charge.source.Card.brand}  ****  {charge.source.Card.last4} <br />
                                        <small>Expires:  {charge.source.Card.exp_month} / {charge.source.Card.exp_year}</small>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                }
            </div>
        </div>
    );
}

