import React, { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            touched: false,
            hasError: false,
            validity: {},
            formTouched: false,
            errorMessage: ''    // todo refactor used for server side error messages... probably needs an array
        };
    }


    componentWillReceiveProps = (props) => {
        if (!this.state.formTouched && props.isFormTouched) {
            this.setState({ formTouched: true });
            console.debug('form touched, do something!');
            this.checkValidity(this.inputRef.current);
        }
    }


    handleChange = (e) => {
        this.props.onChange(e);
        this.setValidity(e);
    }


    // todo fix these names...
    setValidity = async (e) => {
        this.checkValidity(e.target);
    }

    // todo fix these names...
    checkValidity = async (target) => {
        //console.debug(e.target.validity.valueMissing);
        //console.debug(e.target.validity);
        //console.debug(e.target.validity.customError)
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