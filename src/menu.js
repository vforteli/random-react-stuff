import React, { Component } from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";
import { isLoggedIn, logout, getCurrentUser } from './authentication';

class Menu extends Component {

    handleLogout = (event) => {
        event.preventDefault();
        logout().then(() => {
            this.props.history.push("/login");
        });
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-md navbar-light navbar-bg-flexinets" ng-controller="MenuController">
                <Link to='/' className="navbar-brand"><img src="/Content/img/flexible-networks-nordic_logo-genomskinlig-300x77.png" alt="flexinets logo" /></Link>
                {isLoggedIn() && <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>}
                {isLoggedIn() &&
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><NavLink to='/users' activeClassName='menuactive' className="nav-link">Users</NavLink></li>
                            <li className="nav-item"><NavLink to='/subscription' activeClassName='menuactive' className="nav-link">Subscription</NavLink></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#menu" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {getCurrentUser().EmailAddress} <b className="caret"></b>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="" ng-click="openEditAccountModal()"><i className="fas fa-user"></i> My Account</a>
                                    <a className="dropdown-item" href="" ng-click="openChangePasswordModal()"><i className="fas fa-key"></i> Change Password</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="" onClick={this.handleLogout} > <span className="fas fa-sign-out-alt"></span> Log off</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
            </nav>
        );
    }
}

export default withRouter(Menu);