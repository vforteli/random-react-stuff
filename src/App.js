import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from 'axios';

import { isLoggedIn, getRefreshedAccessToken, LOGIN_URL, LOGOUT_URL } from './authentication';
import Footer from './footer';
import Menu from './menu';
import Login from './Login/login';
import Home from './Home/home';
import Subscription from './Subscription/subscription';
import Users from './Users/users';


class App extends Component {
    componentWillMount() {
        // todo refactor this mess
        axios.interceptors.request.use(async config => {
            if (config.url.indexOf(LOGIN_URL) >= 0 || config.url.indexOf(LOGOUT_URL) >= 0) {
                console.debug('withCredentials enabled for domain');
                config.withCredentials = true;
            }
            else {
                var accessToken = await getRefreshedAccessToken();
                if (accessToken !== null) {
                    config.headers.authorization = `Bearer ` + accessToken;
                }
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
    <Route {...rest} render={props => isLoggedIn() ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { previousLocation: props.location } }} />} />;


export default App;
