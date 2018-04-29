import React, { Component } from 'react';
import { ButtonLoading } from '../components';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class BeginPasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailaddress: '',
            modal: true
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        console.debug('begin reset');
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset ng-disabled="loading">
                            <div className="modal-content">
                                <ModalHeader>
                                    <h5 className="modal-title">Reset password</h5>
                                </ModalHeader>
                                <ModalBody>
                                    <p className="info">
                                        Enter your email address below and click Reset password.<br />
                                        You will shortly receive an email containing a link to reset your password.
                                    </p>
                                    <div className="form-group required">
                                        <label>Email address</label>
                                        <input className="form-control" type="email" required name="emailaddress" value={this.state.emailaddress} onChange={this.handleChange} placeholder="email@example.com" />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <ButtonLoading className="btn btn-primary" loading={this.state.loading} type="submit" value='Send reset email'></ButtonLoading> <button type="button" className="btn btn-default">Cancel</button>
                                </ModalFooter>
                            </div>
                        </fieldset>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default BeginPasswordReset;