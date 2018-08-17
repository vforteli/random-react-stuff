import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import { PrivateRoute } from './Shared/PrivateRoute';
import Menu from './menu';
import Login from './Login/login';
import Home from './Home/home';
import OrdersList from './Orders/OrderList';
import AccountList from './Accounts/AccountList';
import NetworkList from './Networks/NetworkList';
import { ToastContainer } from 'react-toastify';
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
                            <PrivateRoute path='/accounts' component={AccountList} />
                            <PrivateRoute path='/mbb/networks' component={NetworkList} />
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
