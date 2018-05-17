import { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            touched: false,
            hasError: false,
            validity: {}
        };
    }


    setTouched = (e) => {
        this.setValidity(e);
    }


    handleChange = (e) => {
        this.setValidity(e);
        this.props.onChange(e);
    }


    setValidity = (e) => {
        //console.debug(e.target.validity.valueMissing);
        //console.debug(e.target.validity);
        //console.debug(e.target.validity.customError)
        console.debug(this.props.customValidator());
        const valid = e.target.checkValidity();
        this.setState({
            touched: true,
            hasError: !valid,
            validity: e.target.validity
        });
    }
}

export default ValidatedInput;