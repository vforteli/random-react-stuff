import { Component } from 'react';

class ModalForm extends Component {
    dismiss = (event) => { this.setState({ modal: false }); }

    onClosed = (event) => {
        if (this.props.onClosed) {
            this.props.onClosed(this.state.result);
        }
    }
}

export default ModalForm;