import { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            touched: false,
            hasError: false,
            validity: {},
            errorMessage: ''    // todo refactor used for server side error messages... probably needs an array
        };
    }


    handleChange = (e) => {
        this.props.onChange(e);
        this.setValidity(e);
    }


    setValidity = async (e) => {
        //console.debug(e.target.validity.valueMissing);
        //console.debug(e.target.validity);
        //console.debug(e.target.validity.customError)
        const target = e.target;
        if (this.props.customValidator) {
            // todo custom validators should return boolean valid and an optional message
            // todo refactor
            const customResult = await this.props.customValidator(target.value);
            const message = 'Email already registered';
            target.setCustomValidity(!customResult ? message : '');
            this.setState({ errorMessage: !customResult ? message : '' });
        }

        const valid = target.checkValidity();
        this.setState({
            touched: true,
            hasError: !valid,
            validity: target.validity
        });
    }
}

export default ValidatedInput;