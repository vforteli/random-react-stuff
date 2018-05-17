import React, { Component } from 'react';
import { ButtonLoading } from '../Shared/components';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextInputValidated from '../Shared/TextInputValidated';
import axios from 'axios';


class UserDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.match.params.userid,
            username: '',
            fullname: '',
            email: '',
            modal: true,
            result: false
        };
    }

    componentWillMount() {
        if (this.state.userId) {
            axios.get('http://localhost:64730/api/users/' + this.state.userId).then(response => {
                if (response.status === 200) {
                    this.setState({
                        username: response.data.Username,
                        fullname: response.data.Fullname,
                        email: response.data.EmailAddress
                    });
                }
            }, function (response) {
                console.debug('Couldnt load user...');
            });
        }
        else {
            axios.get('http://localhost:64730/api/users/getrandomusername').then(response => {
                this.setState({ username: response.data });
            });
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            this.setState({ loading: true });
            this.setState({ result: this.state.userId });
            this.setState({ loading: false });
            this.dismiss();
        }

        this.setState({ isDirty: true });
    }

    dismiss = (event) => { this.setState({ modal: false }); }

    onClosed = (event) => { this.props.onClosed(this.state.result); }

    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.state.modal} toggle={this.dismiss}>
                <form onSubmit={this.handleSubmit} noValidate className={this.state.isDirty && 'was-validated'}>
                    <div className="modal-content">
                        <ModalHeader>{this.state.userId ? `Edit user ${this.state.fullname}` : 'Add user'}</ModalHeader>
                        <ModalBody>
                            <TextInputValidated type="text" name="fullname" label="Name" required value={this.state.fullname} onChange={this.handleChange} placeholder="Firstname Lastname" />
                            <TextInputValidated type="text" name="username" readOnly={this.state.userId} label="Username" required value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                            <small className="form-text text-muted">Set to desired username or use a randomly generated. <br />The username must be unique and cannot be changed later</small>
                            <TextInputValidated type="email" name="email" label="Email" required value={this.state.email} onChange={this.handleChange} placeholder="email@example.com" />
                            {!this.state.userId &&
                                <div className="bs-callout bs-callout-info">
                                    <h4>Adding a new user</h4>
                                    After adding a user, an email invite for downloading the App will be sent to the user.<br />
                                    The link must be clicked on the intended device.<br />
                                    If needed the invite can be resent later.
                                </div>
                            }
                        </ModalBody>
                        <ModalFooter>
                            <ButtonLoading className="btn btn-primary" loading={this.state.loading} type="submit" value='Save user' /> <button type="button" className="btn btn-default" onClick={this.dismiss}>Cancel</button>
                        </ModalFooter>
                    </div>
                </form>
            </Modal >
        );
    }
}

export default UserDetail;