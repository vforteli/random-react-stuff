import React from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import TextInputValidated from '../Shared/TextInputValidated';
import ValidatedForm from '../Shared/ValidatedForm';
import { ButtonLoading } from '../Shared/components';
import ModalForm from '../Shared/ModalForm';
import debounce from 'debounce-promise';
import { toast } from 'react-toastify';


class CreateOrderDetail extends ModalForm {
    constructor(props) {
        super(props);

        this.state = {
            modal: true,
            accounts: null
        };
    }

    async componentDidMount() {
        const response = await axios.get('api/crmaccounts');
        this.setState({ accounts: response.data });
        /*
                $http.get('/Api/crmaccounts/').then(function (response) {
                    $scope.accounts = response.data;
                    $scope.loading--;
                });
        
                $scope.ok = function () {
                    $scope.loading++;
                    $http.post('/Api/orders/', $scope.model).then(function (response) {
                        $uibModalInstance.close(response.data);
                    }, function (response) {
                        $scope.error = "Something went wrong: " + response.statusText;
                    }).finally(function () { $scope.loading--; });
                };
        */
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [target.name]: value });
    }


    handleSubmit = async (event) => {
        this.setState({ loading: true });
        //const response = await axios.post('api/orders', )
        //this.dismiss(response.data);
    }


    render() {
        return (
            <Modal onClosed={this.onClosed} isOpen={this.state.modal} toggle={this.dismiss}>
                <ValidatedForm onSubmit={this.handleSubmit} >
                    <div className="modal-content">
                        <ModalHeader>Create order</ModalHeader>
                        <ModalBody>
                            Hurr
                        </ModalBody>
                        <ModalFooter>
                            <ButtonLoading className="btn btn-primary" loading={this.state.loading} type="submit">Create order</ButtonLoading> <button type="button" className="btn btn-default" onClick={this.dismiss}>Cancel</button>
                        </ModalFooter>
                    </div>
                </ValidatedForm>
            </Modal >
        );
    }
}

export default CreateOrderDetail;