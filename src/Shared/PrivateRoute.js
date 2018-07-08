import React from 'react';
import { isLoggedIn } from 'flexinets-react-authentication';
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => <Route {...rest} render={props => isLoggedIn() ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { previousLocation: props.location } }} />} />;