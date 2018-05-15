import { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            touched: false,
            hasError: false,
            valid: null
        };
    }


    handleChange = (e) => {
        //console.debug(e.target.validity.valueMissing);      
        const valid = e.target.checkValidity();
        this.setState({
            touched: true,
            valid: valid,
            hasError: !valid    // duh...
        });
        this.props.onChange(e); // call onchange from parent
    }
}

export default ValidatedInput;