import React from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import TextInputValidated from '../Shared/TextInputValidated';
import ValidatedForm from '../Shared/ValidatedForm';
import { ButtonLoading } from '../Shared/components';
import ModalForm from '../Shared/ModalForm';
import debounce from 'debounce-promise';
import { toast } from 'react-toastify';


class UserDetail extends ModalForm {
    constructor(props) {
        super(props);

        this.state = {
            userId: props.match.params.userid,
            username: '',
            fullname: '',
            email: '',
            modal: true
        };
    }

    async componentWillMount() {
        if (this.state.userId) {
            const response = await axios.get('/api/users/' + this.state.userId);
            if (response.status === 200) {
                this.setState({
                    username: response.data.Username,
                    fullname: response.data.Fullname,
                    email: response.data.EmailAddress
                });
            }
        }
        else {
            const response = await axios.get('/api/users/getrandomusername');
            this.setState({ username: response.data });
        }
    }


    checkUsernameAvailability = debounce(async (username) => {
        if (username) {
            const response = await axios.get(`/api/users/checkusernameavailability?username=${username}`);
            return response.data.available;
        }
        return true;
    }, 700, { leading: true });


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }


    handleSubmit = async (event) => {
        this.setState({ loading: true });

        const model = {
            Fullname: this.state.fullname,
            Username: this.state.username,
            EmailAddress: this.state.email,
            invite: false
        }

        // todo refactor this into user repository or similar
        if (this.state.userId) {
            const response = await axios.put(`/api/users/${this.state.userId}`, model);
            if (response.status === 200) {
                toast.success('The user was saved');
                this.dismiss(this.state.userId);
            }
            else {
                toast.error(`Something went wrong: ${response.statusText}`);
            }
        }
        else {
            model.invite = true;
            const response = await axios.post('/api/users/', model);
            if (response.status === 200) {
                toast.success('The user was created');
                toast.success(`An invite has been sent to ${model.EmailAddress}`);
                this.dismiss(response.data.Item1);  // todo fix this in backend.. value tuple without name...
            }
            else {
                toast.error(`Something went wrong: ${response.statusText}`);
            }
        }

        this.setState({ loading: false });
    }


    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.state.modal} toggle={this.dismiss}>
                <ValidatedForm onSubmit={this.handleSubmit}>
                    <div className="modal-content">
                        <ModalHeader>{this.state.userId ? `Edit user ${this.state.fullname}` : 'Add user'}</ModalHeader>
                        <ModalBody>
                            <TextInputValidated type="text" name="fullname" label="Name" required value={this.state.fullname} onChange={this.handleChange} placeholder="Firstname Lastname" />
                            <TextInputValidated type="text" name="username" readOnly={this.state.userId} label="Username" required value={this.state.username} customValidator={this.checkUsernameAvailability} onChange={this.handleChange} placeholder="Username">
                                {!this.state.userId &&
                                    <small className="form-text text-muted">
                                        Set to desired username or use a randomly generated. <br />
                                        The username must be unique and cannot be changed later
                                    </small>
                                }
                            </TextInputValidated>
                            <TextInputValidated type="email" name="email" label="Email" required value={this.state.email} onChange={this.handleChange} placeholder="email@example.com">
                                {!this.state.userId &&
                                    <div className="bs-callout bs-callout-info">
                                        <h4>Adding a new user</h4>
                                        After adding a user, an email invite for downloading the App will be sent to the user.<br />
                                        The link must be clicked on the intended device.<br />
                                        If needed the invite can be resent later.
                                    </div>
                                }
                            </TextInputValidated>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonLoading className="btn btn-primary" loading={this.state.loading} type="submit">{this.state.userId ? 'Save user' : 'Add User & Send invite'}</ButtonLoading> <button type="button" className="btn btn-default" onClick={this.dismiss}>Cancel</button>
                        </ModalFooter>
                    </div>
                </ValidatedForm>
            </Modal >
        );
    }
}

export default UserDetail;