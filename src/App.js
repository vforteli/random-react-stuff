import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import { authInterceptor } from './Shared/authentication';
import { PrivateRoute } from './Shared/PrivateRoute';
import Footer from './Shared/Footer';
import Menu from './menu';
import Login from './Login/login';
import Home from './Home/home';
import Subscription from './Subscription/subscription';
import Users from './Users/users';
import Signup from './Signup/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
    componentWillMount() {
        axios.defaults.validateStatus = (status) => { return status >= 200 && status < 500; };
        axios.interceptors.request.use(async config => authInterceptor(config));
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
                        <Route path="/signup" component={Signup} />
                    </div>
                    <Footer />
                    <ToastContainer />
                </div >
            </Router>
        );
    }
}


export default App;
