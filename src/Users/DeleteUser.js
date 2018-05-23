import React, { Component } from 'react';
import { ButtonLoading } from '../Shared/components';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';


class DeleteUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: parseInt(props.match.params.userid, 10),
            modal: true,
            result: false
        };
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        this.setState({ result: this.state.userId });
        this.dismiss();
        axios.delete('/api/users/' + this.state.userId).then(function (response) {
            toast.info("User deleted");
            this.setState({ loading: false });
            this.dismiss(this.state.userId);
        });
    }


    dismiss = (event) => { this.setState({ modal: false }); }


    onClosed = (event) => {
        if (this.props.onClosed) {
            this.props.onClosed(this.state.result);
        }
    }


    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.state.modal} toggle={this.dismiss} className={this.props.className}>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="modal-content">
                        <ModalBody>
                            <h5>Are you sure you want to delete user?</h5>
                            <strong>{this.props.fullname}</strong>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonLoading className="btn btn-danger" loading={this.state.loading} type="submit">Delete</ButtonLoading> <button type="button" className="btn btn-default" onClick={this.dismiss}>Cancel</button>
                        </ModalFooter>
                    </div>
                </form>
            </Modal>
        );
    }
}

export default DeleteUser;