import React, { Component } from 'react';
import { ButtonLoading } from '../Shared/components';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextInputValidated from '../Shared/TextInputValidated';
import axios from 'axios';
import { ACCOUNT_URL } from '../Shared/authentication';


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentWillMount() {
        axios.get(ACCOUNT_URL).then(response => {
            console.debug(response);
        });
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        this.setState({ result: this.state.userId });
        this.setState({ loading: false });
        this.dismiss();
    }


    dismiss = (event) => {
        if (this.props.onDismiss) {
            this.props.onDismiss(this.state.result);
        }
    }

    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.props.isOpen} toggle={this.dismiss}>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="modal-content">
                        <ModalHeader>My account</ModalHeader>
                        <ModalBody>
                            <TextInputValidated type="text" name="fullname" label="Name" required value={this.state.user.Fullname} onChange={this.handleChange} placeholder="Firstname Lastname" />
                            <TextInputValidated type="text" name="username" readOnly={this.state.user.UserID} label="Username" required value={this.state.user.Username} onChange={this.handleChange} placeholder="Username" />
                            <TextInputValidated type="email" name="email" label="Email" required value={this.state.user.EmailAddress} onChange={this.handleChange} placeholder="email@example.com" />
                        </ModalBody>
                        <ModalFooter>
                            <ButtonLoading className="btn btn-primary" loading={this.state.loading} type="submit" value='Save changes' /> <button type="button" className="btn btn-default" onClick={this.dismiss}>Cancel</button>
                        </ModalFooter>
                    </div>
                </form>
            </Modal >
        );
    }
}

export default Account;