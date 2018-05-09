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


    setTouched = (e) => {
        this.setState({
            touched: true,
            valid: e.target.checkValidity(),
            hasError: !e.target.checkValidity()    // duh...
        });
    }

    handleChange = (e) => {
        console.debug(e.target.validity.valueMissing);
        if (this.state.touched) {
            this.setState({
                valid: e.target.checkValidity(),
                hasError: !e.target.checkValidity()    // duh...
            });
        }
        this.props.onChange(e); // call onchange from parent
    }
}

export default ValidatedInput;