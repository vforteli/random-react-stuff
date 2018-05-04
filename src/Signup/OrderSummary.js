import React from 'react';

export const OrderSummary = ({ quantity: Quantity, currency: Currency, vat: Vat, sum: Sum, price: Price, title: Title, isEuCountry: IsEuCountry }) =>


    <table className="table table-striped users-table">
        <thead>
            <tr>
                <td>Product</td>
                <td className="text-right">Quantity</td>
                <td className="text-right">Price</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{Title}</td>
                <td className="text-right">{Quantity}</td>
                <td className="fln-price">{Price} {Currency}</td>
            </tr>
            {IsEuCountry &&
                <tr>
                    <td colSpan="2">VAT <small className="text-muted">(For EU VAT exemption, fill in a VAT number)</small></td>
                    <td className="fln-price">{Vat} {Currency}</td>
                </tr>
            }
            <tr>
                <td colSpan="2">Total</td>
                <td className="fln-price">{Sum + Vat} {Currency}</td>
            </tr>
        </tbody>
    </table>;