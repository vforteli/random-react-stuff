import React from 'react';
import ValidatedInput from './ValidatedInput';

class TextInputValidated extends ValidatedInput {
    render() {
        const { customValidator, onChange, ...rest } = this.props;  // todo do this in ValidatedInput?
        return (
            <div className={this.props.required ? 'form-group required' : 'form-group'}>
                <label htmlFor={this.props.name}>{this.props.label} {!this.props.required && <small>(Optional)</small>}</label>
                <input onBlur={this.setTouched} className={this.state.hasError ? 'form-control is-invalid' : 'form-control'} {...rest} onChange={this.handleChange} />
                <div className="invalid-feedback">
                    This field is required
                    {this.state.validity.valueMissing && 'This field is required'}
                    {this.state.validity.customError && 'Custom error'}
                </div>
            </div>
        );
    }
}

export default TextInputValidated;