import React, { Component } from 'react';
import { login, isLoggedIn, getCurrentUser } from '../authentication';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import BeginPasswordReset from './beginPasswordReset';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        if (isLoggedIn()) {
            this.props.history.push("/");
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        login(this.state.username, this.state.password).then((response) => {
            if (response.status === 200) {
                this.props.history.push("/");   // todo redirect to previous?
            }
        });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card mt-3">
                    <div className="card-body">
                        <form method="post" onSubmit={this.handleSubmit} className="form-signin">
                            <h3>Log in to Flexinets Global Wi-Fi</h3>
                            <label className="sr-only" htmlFor="Username">Email address</label>
                            <input type="email" value={this.state.username} onChange={this.handleChange} id="Username" name="username" placeholder="Email address" required autoFocus className="form-control" />
                            <label className="sr-only" htmlFor="Password">Password</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} id="Password" name="password" placeholder="Password" required className="form-control" />
                            <br />
                            <button type="submit" className="btn btn-block btn-primary">Log in</button>
                            <br />
                            <div className="text-center"><h5><Link to='/login/reset'>Forgot password?</Link></h5></div>
                        </form>
                    </div>
                </div>
                <Route path="/login/reset" component={BeginPasswordReset} />
            </div >
        );
    }
}

export default withRouter(Login);