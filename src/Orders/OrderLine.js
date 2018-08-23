import React, { Component } from 'react';

class OrderLine extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.value.ProductCategoryId}</td>
                <td>{this.props.value.Title}</td>
                <td>{this.props.value.Quantity}</td>
                <td className="text-nowrap">{this.props.value.Price} {this.props.value.CurrencyName}</td>
                <td className="text-nowrap">{this.props.value.Price * this.props.value.Quantity}</td>
            </tr>
        )
    }
}

export default OrderLine;
