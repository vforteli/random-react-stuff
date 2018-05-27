import { Component } from 'react';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            touched: false,
            hasError: false,
            validity: {}
        };
    }


    handleChange = (e) => {
        this.props.onChange(e);
        this.setValidity(e);
    }


    setValidity = async (e) => {
        //console.debug(e.target.validity.valueMissing);
        //console.debug(e.target.validity);
        //console.debug(e.target.validity.customError)
        if (this.props.customValidator) {
            e.persist();
            const customResult = await this.props.customValidator(e);
            console.debug(`custom validator result ${customResult}`);
            if (!customResult) {
                e.target.setCustomValidity('Email already registered'); // refactor message
            }
            else {
                e.target.setCustomValidity('');
            }
        }

        const valid = e.target.checkValidity();
        this.setState({
            touched: true,
            hasError: !valid,
            validity: e.target.validity
        });
    }
}

export default ValidatedInput;