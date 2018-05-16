import React, { Component } from 'react';
import { ButtonLoading } from '../Shared/components';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextInputValidated from '../Shared/TextInputValidated';
import axios from 'axios';
import { ACCOUNT_URL } from '../Shared/authentication';
import { toast } from 'react-toastify';


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
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
        event.preventDefault();
        console.debug("foo");
        this.setState({ loading: true });

        const response = await axios.post(ACCOUNT_URL, {
            emailaddress: this.state.email,
            phonenumber: this.state.phonenumber,
            fullname: this.state.phonenumber
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


    dismiss = (event) => { this.setState({ isOpen: false }); }


    onClosed = (event) => {
        if (this.props.onClosed) {
            this.props.onClosed('result goes here');
        }
    }

    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.state.isOpen} toggle={this.dismiss}>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="modal-content">
                        <ModalHeader>My account</ModalHeader>
                        <ModalBody>
                            <TextInputValidated type="email" name="email" label="Email" required value={this.state.email} onChange={this.handleChange} placeholder="email@example.com" />
                            <TextInputValidated type="tel" name="phonenumber" label="Phone number" required value={this.state.phonenumber} onChange={this.handleChange} placeholder="Phone number with country code" />
                            <TextInputValidated type="text" name="fullname" label="Name" required value={this.state.fullname} onChange={this.handleChange} placeholder="Firstname Lastname" />
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