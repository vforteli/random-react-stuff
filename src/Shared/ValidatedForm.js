import React from 'react';
import { FormValidationContext } from './FormValidationContext';
//export const FormValidationContext = React.createContext();

class ValidatedForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { touched: false };
    }

    // todo maybe use separate methods for valid and invalid submit
    handleSubmit = (event) => {
        this.setState({ touched: true });
        event.preventDefault();

        const valid = event.target.checkValidity();
        console.debug(`form isValid: ${valid}`);
        if (valid) {
            console.debug('form is valid, call parent onSubmit');
            this.props.onSubmit(event);
        }
    }

    render() {
        const { onSubmit, onTouched, ...rest } = this.props;
        return (
            <FormValidationContext.Provider value={this.state.touched}>
                <form {...rest} onSubmit={this.handleSubmit} noValidate>
                    {this.props.children}
                </form>
            </FormValidationContext.Provider>
        );
    }
}

export default ValidatedForm;