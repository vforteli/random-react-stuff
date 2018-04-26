import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import { isLoggedIn, getRefreshedAccessToken } from './authentication';
import Footer from './footer';
import Menu from './menu';
import Login from './Login/login';
import Home from './Home/home';
import Subscription from './Subscription/subscription';
import Users from './Users/users';


class App extends Component {
    componentWillMount() {
        axios.interceptors.request.use(async config => {
            var accessToken = await getRefreshedAccessToken();
            if (accessToken !== null) {
                config.headers.authorization = `Bearer ` + accessToken;
            }
            return config;
        });
    }


    render() {
        return (
            <Router>
                <div className="modal-blur">
                    <Menu />
                    <div className="site-content">
                        <PrivateRoute exact path='/' component={Home} />
                        <PrivateRoute path='/users' component={Users} />
                        <PrivateRoute path='/subscription' component={Subscription} />
                        <Route path="/login" component={Login} />
                    </div>
                    <Footer />
                </div >
            </Router>
        );
    }
}


const PrivateRoute = ({ component: Component, ...rest }) =>
    <Route {...rest} render={props => isLoggedIn() ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />} />;


export default App;
