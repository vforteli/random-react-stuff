import React from 'react';
import ValidatedInput from './ValidatedInput';

class TextAreaInputValidated extends ValidatedInput {
    render() {
        const { children, customValidator, onChange, ...rest } = this.props;  // todo do this in ValidatedInput?
        return (
            <div className={this.props.required ? 'form-group required' : 'form-group'}>
                <label htmlFor={this.props.name}>{this.props.label} {!this.props.required && <small>(Optional)</small>}</label>
                <textarea onBlur={this.checkValidity} {...rest} className={this.state.hasError ? 'form-control is-invalid' : 'form-control'} {...this.props} onChange={this.handleChange} />
                <div className="invalid-feedback">
                    This field is required
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default TextAreaInputValidated;