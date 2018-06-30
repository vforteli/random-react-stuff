﻿import React, { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            touched: false,
            hasError: false,
            validity: {},
            errorMessage: ''    // todo refactor used for server side error messages... probably needs an array
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.isFormTouched && this.props.isFormTouched) {
            console.debug('form touched, check validity');
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
        if (!target.readOnly && this.props.customValidator) {
            const customValidatorResult = await this.props.customValidator(target.value);
            target.setCustomValidity(!customValidatorResult.valid ? customValidatorResult.message : '');
            this.setState({ errorMessage: !customValidatorResult.valid ? customValidatorResult.message : '' });
        }

        this.setState({
            touched: true,
            hasError: !target.validity.valid,
            validity: target.validity
        });
    }
}

export default ValidatedInput;