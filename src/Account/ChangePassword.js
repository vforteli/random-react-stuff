﻿import React, { Component } from 'react';
import { ButtonLoading } from '../Shared/components';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextInputValidated from '../Shared/TextInputValidated';
import axios from 'axios';
import TextAreaInputValidated from '../Shared/TextAreaInputValidated';


class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldpassword: '',
            password: '',
            passwordconfirm: ''
        };
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
                        <ModalHeader>Change password</ModalHeader>
                        <ModalBody>
                            <TextInputValidated type="password" name="oldpassword" label="Name" required value={this.state.oldpassword} onChange={this.handleChange} placeholder="Old password" />
                            <TextInputValidated type="password" name="password" label="New password" required value={this.state.password} onChange={this.handleChange} placeholder="New password" />
                            <TextInputValidated type="password" name="passwordconfirm" label="Confirm password" required value={this.state.passwordconfirm} onChange={this.handleChange} placeholder="Confirm password" />
                        </ModalBody>
                        <ModalFooter>
                            <ButtonLoading className="btn btn-primary" loading={this.state.loading} type="submit" value='Change password' /> <button type="button" className="btn btn-default" onClick={this.dismiss}>Cancel</button>
                        </ModalFooter>
                    </div>
                </form>
            </Modal >
        );
    }
}

export default ChangePassword;