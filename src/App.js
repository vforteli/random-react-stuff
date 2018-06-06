import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import { authInterceptor } from './Shared/authentication';
import { PrivateRoute } from './Shared/PrivateRoute';
import Footer from './Shared/Footer';
import Menu from './menu';
import Login from './Login/login';
import Home from './Home/home';
import Upgrade from './Upgrade/Upgrade';
import Subscription from './Subscription/subscription';
import Users from './Users/Users';
import Signup from './Signup/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
    componentWillMount() {
        axios.defaults.validateStatus = (status) => { return status >= 200 && status < 500; };
        axios.defaults.baseURL = 'http://localhost:64730';
        axios.interceptors.request.use(async config => authInterceptor(config));

        // todo add global error interceptor?
    }


    render() {
        return (
            <Router>
                <Fragment>
                    <div className="modal-blur">
                        <Menu />
                        <div className="site-content">
                            <PrivateRoute exact path='/' component={Home} />
                            <PrivateRoute path='/users' component={Users} />
                            <PrivateRoute path='/subscription' component={Subscription} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/upgrade" component={Upgrade} />
                        </div>
                        <Footer />
                    </div>
                    <ToastContainer />
                </Fragment>
            </Router>
        );
    }
}


export default App;
