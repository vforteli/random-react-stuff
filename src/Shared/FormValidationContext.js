import React from 'react';

export const FormValidationContext = React.createContext();


export function withValidation(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            console.debug('wiiii');
        }


        render() {
            return (
                <FormValidationContext.Consumer>
                    {isFormTouched => <WrappedComponent {...this.props} isFormTouched={isFormTouched} />}
                </FormValidationContext.Consumer>
            );
        }
    };
}

