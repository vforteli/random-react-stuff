import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        // todo refactor url
        axios.get('http://localhost:64730/api/users/').then(response => {
            if (response.status === 200) {
                this.setState({ users: response.data });
            }
        }, function (response) {
            console.debug('Couldnt load users...');
        });
    }


    render() {
        return (
            <div className="container">
                <h3>Users</h3>
                {this.state.users === null &&
                    <div className="text-center">
                        <div className="chartloading"></div>
                        <h4>Getting users...</h4>
                    </div>
                }


                {(this.state.users && this.state.users.length === 0) &&
                    <div ng-if="users.length === 0" className="text-center" ui-sref="users.detail.create()">
                        <h4>No users yet!</h4>
                        <p>Click here to add first user and get started</p>
                        <a ui-sref="users.detail.create()" className="btn btn-primary"><span className="fas fa-plus"></span> Add user</a>
                    </div>
                }


                {(this.state.users && this.state.users.length > 0) &&
                    <div className="card mb-3">
                        <div className="card-body">
                            <a ui-sref="users.detail.create()" className="btn btn-primary"><span className="fas fa-plus"></span> Add User</a>
                            <div className="btn-group">
                                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                                    Selected Users <span className="caret"></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#sendinvite" ng-click="openSendInvite(users)">Send invite</a>
                                </div>
                            </div>

                            <br />
                            <br />

                            <table className="table table-hover users-table">
                                <thead>
                                    <tr className="d-none d-md-table-row">
                                        <td className="wrapcolumn"></td>
                                        <td>
                                            <div className="row">
                                                <strong className="col-md-5">Name</strong>
                                                <strong className="col-md-5">Email</strong>
                                                <strong className="col-md-2">Status</strong>
                                            </div>
                                        </td>
                                        <td className="wrapcolumn"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat="user in users track by user.UserID">
                                        <td className="wrapcolumn"><input type="checkbox" ng-model="user.selected" /></td>
                                        <td ui-sref="users.detail.edit({ userId: user.UserID })" className="pointer">
                                            <div className="row">
                                                <div className="col-md-5"><a ui-sref="users.detail.edit({ userId: user.UserID })" ng-bind="::user.Fullname"></a></div>
                                                <div className="col-md-5" ng-bind="::user.EmailAddress"></div>
                                                <div className="col-md-2">
                                                    <span ng-show="::user.Enabled" className="label label-success">Active</span>
                                                    <span ng-hide="::user.Enabled" className="label label-danger">Suspended</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="wrapcolumn">
                                            <a className="btn btn-info" ui-sref="users.detail.edit({ userId: user.UserID })"><i className="fas fa-edit fa-fw"></i></a>
                                            <button type="button" className="btn btn-danger" ng-click="openDeleteUserModal(user, users)"><span className="fas fa-times fa-fw"></span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        );
    }
}



export default Users;