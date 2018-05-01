import React, { Component } from 'react';
import axios from 'axios';
import { TextInput, TextAreaInput } from '../TextInput';


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = { vatnumber: '' };
    }

    async componentDidMount() {
        axios.get('https://api.flexinets.se/api/location').then((response) => {
            if (response.data.countryCode !== undefined) {
                this.setState({ country: response.data.countryCode });
            }
        });

        axios.get('/content/countries_en.json').then((response) => {
            this.setState({ countries: response.data });
        });
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }


    handleCountryChange = (event) => {
        const country = this.state.countries.filter(country => country.code === event.target.value)[0];
        this.setState({
            country: country.code,
            vatExempt: !country.eu,
            isEuCountry: country.eu
        })

        if (!country.eu) {
            this.setState({
                vatnumber: '',
                viesName: ''
            })
        }
    }


    handleVatNumberChange = async (event) => {
        this.setState({ checkingVatNumber: true, vatExempt: false, viesName: '' });
        this.setState({ vatnumber: event.target.value });
        try {
            const response = await axios.get('https://api.flexinets.se/api/validatevatnumber?vatnumber=' + event.target.value);
            if (response.data.result === 'EuVatNumberValid') {
                this.setState({
                    viesName: response.data.name,
                    vatnumber: response.data.parsedVatNumber,
                    vatExempt: true,
                    companyname: this.state.companyname === undefined ? response.data.name : this.state.companyname
                })
            }
        }
        catch (error) {
            console.error(error);
        }
        this.setState({ checkingVatNumber: false });
    }


    render() {
        return (
            <div>
                <div className="col-md-8 offset-md-2">
                    <h2 className="mt-2 mb-2">Flexinets Global Wi-Fi</h2>

                    <form method="post" name="forms.subscribeform">
                        <div className="card mb-3">
                            <div className="card-body m-2">
                                <h3 className="text-center">Choose subscription type</h3>
                                <div className="row">
                                    <div className="col" ng-classame="model.signupType === 'SingleUser' ? 'btn-policy-active' : 'btn-policy'" ng-click="model.signupType = 'SingleUser'; model.LicenseCount = 1">
                                        <input type="radio" ng-hide="true" name="signuptype" ng-model="model.signupType" ng-required="true" />
                                        <h4>Single user</h4>
                                        <h5>## model.GetSelectedProduct().price ## <span className="text-uppercase">## model.currency ##</span> / Month</h5>
                                        <small>Excluding VAT</small>
                                        <p className="text-muted">
                                            Sign up as a single user<br />
                                            Connect up to 3 personal devices
                                    </p>
                                    </div>
                                    <div className="col" ng-classame="model.signupType === 'Admin' ? 'btn-policy-active' : 'btn-policy'" ng-click="model.signupType = 'Admin'">
                                        <input type="radio" ng-hide="true" name="signuptype" ng-model="model.signupType" ng-required="true" />
                                        <h4>Multiple users</h4>
                                        <h5>## model.GetSelectedProduct().price ## <span className="text-uppercase">## model.currency ##</span> / User / Month</h5>
                                        <small>Excluding VAT</small>
                                        <p className="text-muted">
                                            Sign up and manage multiple users<br />
                                            Connect up to 3 devices per user
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="card-body m-2" ng-hide="model.signupType === undefined">
                                <div className="row fadeout" ng-classame="{'fadeout': model.signupType === 'SingleUser', 'fadein': model.signupType  === 'Admin'}">
                                    <div className="col-sm-6 offset-sm-3" ng-hide="model.signupType === 'SingleUser'">
                                        <div className="form-group required">
                                            <label>Number of users</label>
                                            <div className="input-group number-spinner">
                                                <span className="input-group-btn">
                                                    <button type="button" className="btn btn-default btn-info" ng-click="model.LicenseCount = model.LicenseCount - 1"><span className="fas fa-minus"></span></button>
                                                </span>
                                                <input ng-model="model.LicenseCount" type="number" step="1" required className="form-control text-center no-spinners" placeholder="Number of device licenses" value="1" min="1" max="500" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="btn btn-default btn-info" ng-click="model.LicenseCount = model.LicenseCount + 1"><span className="fas fa-plus"></span></button>
                                                </span>
                                            </div>
                                            <small className="text-muted">A user can install and connect up to 3 personal devices simultaneously</small>
                                        </div>

                                        <div ng-if="model.product === 'ipass_monthly_eur_25'" className="bs-callout bs-callout-info">
                                            <h4>Orders over 20 users</h4>
                                            <p className="text-muted">Please contact us for a corporate offer</p>
                                            <a href="https://www.flexinets.eu/wifi-offer-contact-en/">Contact us <i className="fas fa-external-link-alt"></i></a>
                                        </div>
                                    </div>
                                </div>


                                <hr />
                                <h3 className="text-center m-4">Create account</h3>

                                <div className="row">
                                    <div className="col-md-6">
                                        <TextInput type='email' name='email' value={this.state.email} onChange={this.handleChange} required placeholder='email@example.com' label='Email' />
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput type="password" label='Password' name='password' placeholder='Create a password' required />
                                    </div>
                                </div>


                                <hr />
                                <h3 className="text-center m-4">Billing information</h3>


                                <div className="row">
                                    <div className="col-md-6">
                                        <TextInput type="text" label='Name' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Firstname Lastname' required />
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput type="text" label='Company name' name='companyname' value={this.state.companyname} onChange={this.handleChange} placeholder='Company name' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextAreaInput rows='1' label='Street address' name='streetaddress' placeholder='Street address' required />
                                    </div>
                                    <div className="col-md-3">
                                        <TextInput type="text" label='Postcode' name='postcode' placeholder='Postcode / ZIP' required />
                                    </div>
                                    <div className="col-md-3">
                                        <TextInput type="text" label='City' name='city' placeholder='City' required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group required">
                                            <label>Country</label>
                                            <select className="form-control" value={this.state.country} required onChange={this.handleCountryChange} defaultValue=''>
                                                <option value='' disabled>Select country...</option>
                                                {this.state.countries && this.state.countries.map(country => <option key={country.code} value={country.code}>{country.name}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {this.state.country === 'DK' &&
                                    <div className="row">
                                        <div className="col-md-6">
                                            <TextInput type="text" label='EAN Number' name='ean' placeholder='EAN Number' />
                                        </div>
                                    </div>
                                }

                                {this.state.isEuCountry &&
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>VAT Number <small>(Optional)</small></label>
                                                <input type="text" className="form-control" value={this.state.vatnumber} onChange={this.handleVatNumberChange} placeholder={this.state.country + '00000000'} />
                                                {this.state.viesName}
                                                {this.state.checkingVatNumber && <p>Checking VAT Number...</p>}
                                                {this.state.vatnumber && !this.state.vatExempt && !this.state.checkingVatNumber && <p>This does not appear to be an EU vat number</p>}
                                                <small className="text-muted">If you have a valid EU VAT number please enter it here starting with the country code</small>
                                            </div>
                                        </div>
                                    </div>
                                }


                                <hr />
                                <h3 className="text-center m-4">Checkout</h3>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group required">
                                            <label>Pay with</label>

                                            <div className="list-group mb-2">
                                                <label className="list-group-item list-group-item-action" ng-classame="model.paymentMethod === 'CreditCard' ? 'shop-list-active' : ''">
                                                    <input type="radio" name="foo" ng-required="true" value="CreditCard" ng-model="model.paymentMethod" /> <span className="h5">Credit Card</span> <img src="/Content/img/cc.svg" className="cclogo" /> <img className="float-right" src="/Content/img/powered_by_stripe.png" alt="powered by stripe" />
                                                </label>
                                                <label className="list-group-item list-group-item-action" ng-classame="model.paymentMethod === 'Invoice' ? 'shop-list-active' : ''">
                                                    <input type="radio" name="foo" ng-required="true" value="Invoice" ng-model="model.paymentMethod" /> <span className="h5">Invoice</span> <i className="far fa-envelope"></i> <small className="float-right text-muted">Invoices sent by email <span ng-show="model.country === 'DK'">or EAN</span></small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <table className="table table-striped users-table">
                                            <thead>
                                                <tr>
                                                    <td>Product</td>
                                                    <td className="text-right">Quantity</td>
                                                    <td className="text-right">Price</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>## model.GetSelectedProduct().title ##</td>
                                                    <td className="text-right">## model.LicenseCount ##</td>
                                                    <td className="fln-price">## model.LicenseCount * model.GetSelectedProduct().price | number: 2  ## ## model.currency ##</td>
                                                </tr>
                                                <tr ng-show="model.IsEuCountry">
                                                    <td colSpan="2">VAT <small className="text-muted">(For EU VAT exemption, fill in a VAT number)</small></td>
                                                    <td className="fln-price">## model.GetVatAmount() | number: 2  ## ## model.currency ##</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2">Total</td>
                                                    <td className="fln-price">## model.LicenseCount * model.GetSelectedProduct().price + model.GetVatAmount() | number: 2 ## ## model.currency ##</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="custom-control custom-checkbox m-4">
                                    <input type="checkbox" className="custom-control-input" id="accepttoc" ng-required="true" ng-model="model.accepttermsandconditions" />
                                    <label className="custom-control-label" htmlFor="accepttoc">I have read and accept the</label>
                                    <a href="" ng-click="openTermsAndConditions()">Terms & Conditions</a>
                                </div>

                                <button ng-disabled="loading > 0 || forms.subscribeform.$invalid" type="submit" id="payButton" className="btn btn-block btn-lg btn-primary"><span ng-if="loading == 0">Pay and Create Account</span><span ng-if="loading > 0" className="floadingicon"> </span></button>
                            </div>
                        </div>
                    </form>
                </div>




                <div className="col-sm-12" ng-if="processingPayment">
                    <div className="text-center">
                        <div className="chartloading"></div>
                        <h4>Processing order...</h4>
                    </div>
                </div>



            </div>
        );
    }
}


export default Signup;