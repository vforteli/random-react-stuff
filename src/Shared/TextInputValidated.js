import React, { Component } from 'react';
import ValidatedInput from './ValidatedInput';

class TextInputValidated extends ValidatedInput {
    render() {
        return (
            <div className={this.props.required ? 'form-group required' : 'form-group'}>
                <label htmlFor={this.props.name}>{this.props.label} {!this.props.required && <small>(Optional)</small>}</label>
                <input onBlur={this.setTouched} className={this.state.hasError ? 'form-control is-invalid' : 'form-control'} {...this.props} onChange={this.handleChange} />
                <div className="invalid-feedback">
                    This field is required
                </div>
            </div>
        );
    }
}

export default TextInputValidated;