import React, { Component } from 'react';
import { login, isLoggedIn } from '../authentication';
import { Route, Link, withRouter } from "react-router-dom";
import BeginPasswordReset from './beginPasswordReset';
import { ButtonLoading } from '../components';
import { Alert } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            alertVisible: false
        };
    }

    componentDidMount() {
        if (isLoggedIn()) { this.props.history.push("/"); }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleLogin = async event => {
        event.preventDefault();
        this.setState({ loading: true });
        const response = await login(this.state.username, this.state.password);
        this.setState({ loading: false });
        if (response.status === 200) {
            if (this.props.location && this.props.location.state && this.props.location.state.previousLocation && this.props.location.state.previousLocation.pathname) {
                this.props.history.push(this.props.location.state.previousLocation.pathname);
            }
            else { this.props.history.push("/"); }
        }
        else { this.setState({ alertVisible: true, alertText: response.data.error }); }

    }


    onAlertDismiss = () => { this.setState({ alertVisible: false }); }


    onClosed = (event) => {
        console.debug('modal closed');
        console.debug(event);
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card mt-3">
                    <div className="card-body">
                        <form method="post" onSubmit={this.handleLogin} className="form-signin">
                            <h3>Log in to Flexinets Global Wi-Fi</h3>

                            <Alert color="warning" isOpen={this.state.alertVisible} toggle={this.onAlertDismiss}>{this.state.alertText}</Alert>

                            <label className="sr-only" htmlFor="Username">Email address</label>
                            <input type="email" value={this.state.username} onChange={this.handleChange} id="Username" name="username" placeholder="Email address" required autoFocus className="form-control" />
                            <label className="sr-only" htmlFor="Password">Password</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} id="Password" name="password" placeholder="Password" required className="form-control" />

                            <ButtonLoading type="submit" loading={this.state.loading} className="btn btn-block btn-primary mt-4 mb-4" value='Log in' />

                            <div className="text-center"><h5><Link to='/login/reset'>Forgot password?</Link></h5></div>
                        </form>
                    </div>
                </div>
                <Route path="/login/reset" render={props => <BeginPasswordReset {...props} onClosed={this.onClosed} />} />
            </div >
        );
    }
}


export default withRouter(Login);