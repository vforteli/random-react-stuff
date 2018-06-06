import { Component } from 'react';

class ModalForm extends Component {
    dismiss = (result) => {
        this.setState({
            modal: false,
            result: result
        });
    }

    onClosed = (event) => {
        if (this.props.onClosed) {
            this.props.onClosed(this.state.result);
        }
    }
}

export default ModalForm;