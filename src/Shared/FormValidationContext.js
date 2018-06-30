import React from 'react';

export const FormValidationContext = React.createContext();


/**
 * Adds context for form validation
 * @param {any} Component
 */
export function withFormValidationContext(Component) {
    return function (props) {
        return (
            <FormValidationContext.Consumer>
                {isFormTouched => <Component {...props} isFormTouched={isFormTouched} />}
            </FormValidationContext.Consumer>
        );
    };
}