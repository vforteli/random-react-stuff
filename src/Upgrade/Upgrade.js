import React, { Component, Fragment } from 'react';

class Upgrade extends Component {
    render() {
        return (
            <Fragment>
                <form>
                    <div className="col-md-6 offset-md-3">
                        <div className="card mt-3">
                            <div className="card-body">
                                <h1>iPass Global Wi-Fi</h1>
                                <div ng-show="loading > 0" className="text-center">
                                    <div className="chartloading"></div>
                                    <h4>Getting your details...</h4>
                                </div>

                                <section ng-show="loading === 0">
                                    <h2>Upgrade account to Unlimited</h2>
                                    <div className="form-group required">
                                        <label className="control-label">Email</label>
                                        <div className="input-group-fullwidth">
                                            <input type="email" readOnly className="form-control" ng-model="user.EmailAddress" placeholder="email@example.com" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="control-label">Name</label>
                                        <div className="input-group-fullwidth">
                                            <input ng-model="user.Fullname" readOnly type="text" placeholder="Name" className="form-control" />
                                        </div>
                                    </div>
                                    <section ng-if="user.HostedAuthId !== null">
                                        <h3>Your account has already been upgraded to unlimited</h3>
                                        <p>You can activate your devices by clicking the link below</p>
                                        <a href="{{user.HostedAuthUrl}}" className="btn btn-primary btn-lg btn-block">Continue to activation</a>
                                    </section>
                                    <button ng-if="user.HostedAuthId === null" type="submit" ng-disabled="upgrading" className="btn btn-primary btn-lg btn-block">
                                        <section ng-hide="upgrading"><i className="fas fa-arrow-up"></i> Upgrade account</section>
                                        <section ng-show="upgrading"><i className="fas fa-circle-notch fa-spin"></i> Upgrading account...</section>
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                </form>


                <div className="col-sm-12 mt-4">
                    <h2 className="text-center">Why upgrade?</h2>
                    <div className="row">
                        <div className="col-6 col-md-2">
                            <div className="featurebox-item">
                                <span className="featurebox-icon"><i className="fas fa-plane"></i></span>
                                <h1>Inflight Wi-Fi</h1>
                                on 4.000 airplanes worldwide
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="featurebox-item">
                                <span className="featurebox-icon"><i className="fas fa-wifi"></i></span>
                                <h1>64 Million hotspots</h1>
                                30 million more than before in 180 countries
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="featurebox-item">
                                <span className="featurebox-icon"><i className="fas fa-sign-in-alt"></i></span>
                                <h1>Automatic login</h1>
                                to best available network (optional)
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="featurebox-item">
                                <span className="featurebox-icon"><i className="fas fa-lock"></i></span>
                                <h1>Advanced security with VPN</h1>
                                keeping your private data secure
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="featurebox-item">
                                <span className="featurebox-icon"><i className="fas fa-sync"></i></span>
                                <h1>Unlimited data</h1>
                                Unlimited data on all your mobile devices
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="featurebox-item">
                                <span className="featurebox-icon"><i className="fas fa-mobile"></i></span>
                                <h1>Use on 3 devices</h1>
                                Use on 3 devices simultaneiously (eg tablet, phone, laptop)
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default Upgrade;