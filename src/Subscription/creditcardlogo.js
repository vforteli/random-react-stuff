import React, { Component } from 'react';

class CreditCardLogo extends Component {
    constructor(props) {
        super(props);
        let src = '';
        if (props.cardtype === 'Visa')
            src = '/Content/img/visa.svg';
        else if (props.cardtype === 'MasterCard')
            src = '/Content/img/mastercard.svg';
        else if (props.cardtype === 'American Express')
            src = '/Content/img/amex.svg';

        this.state = { src: src };
    }

    render() {
        return (
            <img alt='cclogo' className='cclogo' src={this.state.src} />
        )
    }
}

export default CreditCardLogo;
