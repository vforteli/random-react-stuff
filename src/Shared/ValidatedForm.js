import React from 'react';

class ValidatedForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { touched: false };
    }

    // todo maybe use separate methods for valid and invalid submit
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ touched: true });
        if (this.props.onTouched) {
            this.props.onTouched(event);
        }

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
            <form {...rest} onSubmit={this.handleSubmit} className={this.state.touched ? 'was-validated' : ''} noValidate>
                {this.props.children}
            </form>
        );
    }
}

export default ValidatedForm;