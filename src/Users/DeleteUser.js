import React from 'react';
import { ButtonLoading } from '../Shared/components';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import ModalForm from '../Shared/ModalForm';


class DeleteUser extends ModalForm {
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

        const response = await axios.delete(`/api/users/${this.state.userId}`);
        this.setState({ loading: false });
        if (response.status === 200) {
            toast.info("User deleted");
            this.dismiss(this.state.userId);
        }
        else {
            toast.error(`Something went wrong: ${response.statusText}`);
        }
    }


    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.state.modal} toggle={this.dismiss}>
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