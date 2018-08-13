import React from 'react';
import ValidatedInput from './ValidatedInput';
import { withValidation } from './FormValidationContext';

class TextAreaInputValidated extends ValidatedInput {
    render() {
        const { children, customValidators, isFormTouched, onChange, ...rest } = this.props;
        return (
            <div className={this.props.required ? 'form-group required' : 'form-group'}>
                <label htmlFor={this.props.name}>{this.props.label} {!this.props.required && <small>(Optional)</small>}</label>
                <textarea onBlur={this.checkValidity} className={this.state.hasError ? 'form-control is-invalid' : 'form-control'} {...rest} onChange={this.handleChange} ref={this.inputRef} />
                <div className="invalid-feedback">
                    {this.state.validity.valueMissing && 'This field is required'}
                    {!this.state.validity.valueMissing && this.state.validity.typeMismatch && 'This field is invalid'}
                    {this.state.validity.customError && this.state.errorMessage}
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default withValidation(TextAreaInputValidated);