﻿import React from 'react';

class ValidatedForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { touched: false };
    }

    // todo maybe use separate methods for valid and invalid submit
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ touched: true });

        const valid = event.target.checkValidity();
        console.debug(`form isValid: ${valid}`);
        if (valid) {
            console.debug('form is valid, call caller onSubmit');
            this.props.onSubmit(event);
        }
    }

    render() {
        const { onSubmit, ...rest } = this.props;
        return (
            <form {...rest} onSubmit={this.handleSubmit} className={this.state.touched ? 'was-validated' : ''} noValidate>
                {this.props.children}
            </form>
        );
    }
}

export default ValidatedForm;