import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class TermsAndConditions extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle}>
                <div className="modal-content">
                    <ModalHeader>Terms and Conditions</ModalHeader>
                    <ModalBody>
                        derp
                        hudesdse ljsed
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-info" onClick={this.props.onToggle}>Close</button>
                    </ModalFooter>
                </div>
            </Modal>
        );
    }
}

export default TermsAndConditions;


