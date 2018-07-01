import React, { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            hasError: false,
            validity: {},
            errorMessage: ''    // todo refactor used for server side error messages... probably needs an array
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.isFormTouched && this.props.isFormTouched) {
            console.debug('form touched, set validity');
            this.setValidity(this.inputRef.current);
        }
    }

    handleChange = (e) => {
        this.props.onChange(e);
        this.checkValidity(e);
    }


    checkValidity = async (e) => this.setValidity(e.target)


    setValidity = async (target) => {
        if (!target.readOnly && this.props.customValidators) {
            this.props.customValidators.forEach(async (validator) => {
                const customValidatorResult = await validator(target.value);
                console.debug(customValidatorResult);
                target.setCustomValidity(!customValidatorResult.valid ? customValidatorResult.message : '');    // todo fix...
                this.setState({ errorMessage: !customValidatorResult.valid ? customValidatorResult.message : '' });
            });
        }

        this.setState({
            hasError: !target.validity.valid,
            validity: target.validity
        });
    }
}

export default ValidatedInput;