import { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            touched: false,
            hasError: false,
        };
    }


    setTouched = (e) => {
        this.setValidity(e);
    }


    handleChange = (e) => {
        this.setValidity(e);
        this.props.onChange(e); // call onchange from parent
    }


    setValidity = (e) => {
        //console.debug(e.target.validity.valueMissing);      
        const valid = e.target.checkValidity();
        this.setState({
            touched: true,
            hasError: !valid    // duh...
        });
    }
}

export default ValidatedInput;