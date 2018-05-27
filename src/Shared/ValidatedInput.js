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
        const target = e.target;
        if (this.props.customValidator) {
            const customResult = await this.props.customValidator(target.value);
            console.debug(`custom validator result ${customResult}`);
            if (!customResult) {
                target.setCustomValidity('Email already registered'); // refactor message
            }
            else {
                target.setCustomValidity('');
            }
        }

        const valid = target.checkValidity();
        this.setState({
            touched: true,
            hasError: !valid,
            validity: target.validity
        });
    }
}

export default ValidatedInput;