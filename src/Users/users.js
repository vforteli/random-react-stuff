import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import UserDetail from './UserDetail';
import DeleteUser from './DeleteUser';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: null };
    }

    async componentDidMount() {
        const response = await axios.get('/api/users/');
        this.setState({ users: response.data });
    }


    onClosed = async (result) => {
        if (result) {
            const response = await axios.get('/api/users/');
            this.setState({ users: response.data });
        }
        this.props.history.push('/users');
    }


    onDeleteUserClosed = (result) => {
        if (result) {
            this.setState({ users: this.state.users.filter(o => o.UserID !== result) });
        }
        this.props.history.push('/users');
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


                {this.state.users && this.state.users.length === 0 &&
                    <div ng-if="users.length === 0" className="text-center" ui-sref="users.detail.create()">
                        <h4>No users yet!</h4>
                        <p>Click here to add first user and get started</p>
                        <Link to='/users/create' className="btn btn-primary"><span className="fas fa-plus"></span> Add User</Link>
                    </div>
                }


                {this.state.users && this.state.users.length > 0 &&
                    <div className="card mb-3">
                        <Route path="/users/create" />
                        <Route path="/users/edit/:id" />
                        <div className="card-body">
                            <Link to='/users/create' className="btn btn-primary"><span className="fas fa-plus"></span> Add User</Link>{' '}
                            <div className="btn-group">
                                <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                                    Selected Users <span className="caret"></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="" ng-click="openSendInvite(users)">Send invite</a>
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
                                    {this.state.users.map((user) =>
                                        <tr key={user.UserID}>
                                            <td className="wrapcolumn"><input type="checkbox" /></td>
                                            <td className="pointer">
                                                <div className="row">
                                                    <div className="col-md-5"><Link to={'/users/edit/' + user.UserID}>{user.Fullname}</Link></div>
                                                    <div className="col-md-5">{user.EmailAddress}</div>
                                                    <div className="col-md-2">{user.Enabled ? <span className="label label-success">Active</span> : <span className="label label-danger">Suspended</span>}</div>
                                                </div>
                                            </td>
                                            <td className="wrapcolumn">
                                                <Link className="btn btn-info" to={'/users/edit/' + user.UserID}><i className="fas fa-edit fa-fw"></i></Link>{' '}
                                                <Link className="btn btn-danger" to={'/users/delete/' + user.UserID}><i className="fas fa-times fa-fw"></i></Link>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }

                <Route path="/users/create" render={props => <UserDetail {...props} onClosed={this.onClosed} />} />
                <Route path="/users/edit/:userid" render={props => <UserDetail {...props} onClosed={this.onClosed} />} />
                <Route path="/users/delete/:userid" render={props => <DeleteUser {...props} onClosed={this.onDeleteUserClosed} />} />
            </div>
        );
    }
}


export default Users;