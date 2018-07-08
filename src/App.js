import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import { PrivateRoute } from './Shared/PrivateRoute';
import Menu from './menu';
import Login from './Login/login';
import Home from './Home/home';
import OrdersList from './Orders/OrderList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authInterceptor } from 'flexinets-react-authentication';


class App extends Component {
    componentWillMount() {
        axios.defaults.validateStatus = (status) => { return status >= 200 && status < 500; };
        axios.defaults.baseURL = 'http://localhost:53848';
        axios.interceptors.request.use(async config => authInterceptor(config));
    }


    render() {
        return (
            <Router>
                <Fragment>
                    <div className="modal-blur">
                        <Menu />
                        <div className="site-content">
                            <PrivateRoute exact path='/' component={Home} />
                            <PrivateRoute path='/orders' component={OrdersList} />
                            <Route path="/login" component={Login} />
                        </div>
                    </div>
                    <ToastContainer />
                </Fragment>
            </Router>
        );
    }
}


export default App;
