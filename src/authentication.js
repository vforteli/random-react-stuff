import decode from 'jwt-decode';
import axios from 'axios';

// todo inject, config, something
const LOGIN_URL = 'https://authentication.flexinets.se/token';
const LOGOUT_URL = 'https://authentication.flexinets.se/logout';
const ACCOUNT_URL = 'https://authentication.flexinets.se/api/account/';
const TOKEN_KEY = 'react_token';

var token = null;
var currentUser = null;
var refreshPromise = null;


export async function login(username, password) {
    console.debug('login');
    clearTokenContext();

    let loginFormData = new FormData();
    loginFormData.append('grant_type', 'password');
    loginFormData.append('username', username);
    loginFormData.append('password', password);

    return axios({
        method: 'post',
        url: LOGIN_URL,
        data: loginFormData,
        config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    }).then((response) => {
        if (response.status === 200) {
            setToken(response.data);
        }
        return response;
    }).catch((error) => {
        console.log(error);
    });
}

export function logout() {
    console.debug('logout');
    clearTokenContext();
    return axios.post(LOGOUT_URL).then(function (response) {
        console.debug('Logged out');
    });
}

export function isLoggedIn() {
    console.debug('isLoggedIn');
    let token = getToken();
    return token !== null && token.refresh_token_expires > new Date().getTime() / 1000;
}

export function getCurrentUser() {
    if (currentUser === null) {
        let token = getToken();
        if (token !== null) {
            try {
                var claims = decode(token.access_token);
                currentUser = {
                    EmailAddress: claims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
                    FirstName: claims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'],
                    LastName: claims['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'],
                    Roles: claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
                    isInRole: function (role) { return this.Roles.indexOf(role) >= 0; },
                    settings: {}
                };
            }
            catch (error) {
                console.debug('unable to parse token');
            }
        }
    }
    return currentUser;
}

export async function getRefreshedAccessToken() {

    let token = getToken();
    if (token !== null) {
        try {
            if (isTokenExpired(token.access_token)) {
                console.debug('Token has expired, start refresh maybe');
            }
        } catch (error) {
            console.debug('Unable to parse jwt access token');
            console.debug(error);
        }
    }
    //            if (!await refreshToken()) {
    //                console.debug('Refresh failed, refresh token expired probably...');
    //                return null;
    //            }
    //            console.debug('gnaa?');
    //        }

    //        let accessToken = getToken().access_token;
    //        console.debug('returning token' + accessToken);
    //        return accessToken;
    //    }
    //    
    //}
    //return null;
    return Promise.resolve(getToken().access_token);    // test stuff
}

/**
 * Save the token to localStorage
 * @param {any} tokenJson
 */
function setToken(tokenJson) {
    console.debug('saving token');
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenJson));
    token = tokenJson;
}


/**
 * Get the token from localStorage or variable if available
 */
function getToken() {
    if (token === null) {
        console.debug('Getting token from localStorage');
        token = JSON.parse(localStorage.getItem(TOKEN_KEY));
    }
    else {
        console.debug('using token variable');
    }
    return token;
}


/**
 * Refresh access token
 */
async function refreshToken() {
    console.debug(refreshPromise);
    if (refreshPromise === null) {
        console.debug('Starting new token refresh');

        let loginFormData = new FormData();
        loginFormData.append('grant_type', 'refresh_token');

        refreshPromise = axios({
            method: 'post',
            url: LOGIN_URL,
            data: loginFormData,
            config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        }).then(response => {
            console.debug(response);
            if (response.status === 200) {
                console.debug('Refreshed access token');
                setToken(response.data);
                return true;
            }
            console.debug('not logged in');
            console.debug(response.status);
            return false;
        }, function (response) {
            if (response.data.error === 'invalid_grant') {
                console.debug('Refresh token expired');
                clearTokenContext();
                return false;
            }
        });
    }
    else {
        console.debug('Pending token refresh, reusing promise');
    }
    return refreshPromise;
}


/**
* Clear the local token context
*/
function clearTokenContext() {
    console.debug('clearing token context');
    localStorage.removeItem(TOKEN_KEY);
    token = null;
    currentUser = null;
}


/**
 * Check if an access token has expired
 * @param {any} jwtToken
 */
function isTokenExpired(jwtToken) {
    const token = decode(jwtToken);
    if (!token.exp) { return null; }

    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(token.exp);

    return expirationDate < new Date();
}