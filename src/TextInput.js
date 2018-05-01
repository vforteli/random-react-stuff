import React from 'react';

export const TextInput = ({ name: Name, label: Label, required: Required, ...rest }) =>
    <div className={Required ? 'form-group required' : 'form-group'}>
        <label htmlFor={Name}>{Label} {!Required && <small>(Optional)</small>}</label>
        <input className="form-control" name={Name} id={Name} required={Required} {...rest} />
        <div className="fln-validation-status-icon"></div>
    </div>;


export const TextAreaInput = ({ name: Name, label: Label, required: Required, ...rest }) =>
    <div className={Required ? 'form-group required' : 'form-group'}>
        <label htmlFor={Name}>{Label} {!Required && <small>(Optional)</small>}</label>
        <textarea className="form-control" name={Name} id={Name} required={Required} {...rest} />
        <div className="fln-validation-status-icon"></div>
    </div>;
