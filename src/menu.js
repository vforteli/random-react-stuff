﻿import React, { Component, Fragment } from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";
import { isLoggedIn, logout, getCurrentUser } from './Shared/authentication';
import { UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, Nav, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import Account from './Account/Account';
import ChangePassword from './Account/ChangePassword';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            accountModalOpen: false,
            passwordModalOpen: false
        };
    }


    handleLogout = async (event) => {
        event.preventDefault();
        await logout();
        this.props.history.push("/login");
    }


    render() {
        return (
            <Fragment>
                <Navbar className="navbar fixed-top navbar-expand-md navbar-light navbar-bg-flexinets">
                    <NavbarBrand tag={Link} to={'/'}><img src="/Content/img/flexible-networks-nordic_logo-genomskinlig-300x77.png" alt="flexinets logo" /></NavbarBrand>
                    {isLoggedIn() &&
                        <Fragment>
                            <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem><NavLink to='/users' activeClassName='menuactive' className="nav-link">Users</NavLink></NavItem>
                                    <NavItem><NavLink to='/subscription' activeClassName='menuactive' className="nav-link">Subscription</NavLink></NavItem>
                                </Nav>
                                <Nav navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>{getCurrentUser().EmailAddress}</DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag='a' href='' onClick={(e) => { e.preventDefault(); this.setState({ accountModalOpen: true }); }}><i className="fas fa-user"></i> My Account</DropdownItem>
                                            <DropdownItem tag='a' href='' onClick={(e) => { e.preventDefault(); this.setState({ passwordModalOpen: true }); }}><i className="fas fa-key"></i> Change Password</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag='a' href='#logout' onClick={this.handleLogout}><i className="fas fa-sign-out-alt"></i> Log off</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </Fragment>
                    }
                </Navbar>
                {this.state.accountModalOpen && <Account onClosed={() => this.setState({ accountModalOpen: false })} />}
                <ChangePassword isOpen={this.state.passwordModalOpen} onDismiss={() => this.setState({ passwordModalOpen: false })} />
            </Fragment>
        );
    }
}

export default withRouter(Menu);