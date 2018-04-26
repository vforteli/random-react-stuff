import React, { Component } from 'react';


class BeginPasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailaddress: ''
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.debug('begin reset');        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset ng-disabled="loading">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Reset password</h5>
                            <a className="close" ng-click="$dismiss()">&times;</a>
                        </div>
                        <div className="modal-body">
                            <p className="info">
                                Enter your email address below and click Reset password.<br />
                                You will shortly receive an email containing a link to reset your password.
                            </p>
                            <div className="form-group required">
                                <label>Email address</label>
                                <input className="form-control" type="email" required name="emailaddress" value={this.state.emailaddress} placeholder="email@example.com" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" fln-loading-button="loading" type="submit">Send reset email</button> <button type="button" className="btn btn-default">Cancel</button>
                        </div>
                    </div>
                </fieldset>
            </form>   
        );
    }
}

export default BeginPasswordReset;