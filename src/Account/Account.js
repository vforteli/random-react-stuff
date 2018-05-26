import React from 'react';
import { ButtonLoading } from '../Shared/components';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextInputValidated from '../Shared/TextInputValidated';
import axios from 'axios';
import { ACCOUNT_URL } from '../Shared/authentication';
import { toast } from 'react-toastify';
import ValidatedForm from '../Shared/ValidatedForm';
import ModalForm from '../Shared/ModalForm';


class Account extends ModalForm {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            email: '',
            phonenumber: '',
            fullname: ''
        };
    }


    componentWillMount() {
        axios.get(ACCOUNT_URL).then(response => {
            this.setState({
                email: response.data.EmailAddress,
                phonenumber: response.data.Phonenumber,
                fullname: response.data.Fullname
            });
        });
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }


    handleSubmit = async (event) => {
        this.setState({ loading: true });
        const response = await axios.post(ACCOUNT_URL, {
            emailaddress: this.state.email,
            phonenumber: this.state.phonenumber,
            fullname: this.state.fullname
        });

        if (response.status === 200) {
            toast.success('Your account was saved');

            this.setState({
                result: this.state.userId,
                loading: false
            });
            this.dismiss();

        }
        else {
            console.debug(response);
        }
    }


    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.state.modal} toggle={this.dismiss}>
                <ValidatedForm onSubmit={this.handleSubmit}>
                    <div className="modal-content">
                        <ModalHeader>My account</ModalHeader>
                        <ModalBody>
                            <TextInputValidated type="email" name="email" label="Email" required value={this.state.email} onChange={this.handleChange} placeholder="email@example.com" />
                            <TextInputValidated type="tel" name="phonenumber" label="Phone number" required value={this.state.phonenumber} onChange={this.handleChange} placeholder="Phone number with country code" />
                            <TextInputValidated type="text" name="fullname" label="Name" required value={this.state.fullname} onChange={this.handleChange} placeholder="Firstname Lastname" />
                        </ModalBody>
                        <ModalFooter>
                            <ButtonLoading className="btn btn-primary" loading={this.state.loading} type="submit">Save changes</ButtonLoading> <button type="button" className="btn btn-default" onClick={this.dismiss}>Cancel</button>
                        </ModalFooter>
                    </div>
                </ValidatedForm>
            </Modal >
        );
    }
}

export default Account;