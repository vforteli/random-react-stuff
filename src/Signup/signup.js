import React, { Component, Fragment } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { debounce } from 'lodash';

import { ButtonLoading } from '../Shared/components';
import TermsAndConditions from './TermsAndConditions';
import { CountrySelect } from './CountrySelect';
import { ProcessingPayment } from './ProcessingPayment';
import { OrderSummary } from './OrderSummary';
import TextInputValidated from '../Shared/TextInputValidated';
import TextAreaInputValidated from '../Shared/TextAreaInputValidated';
import { checkEmailAvailability } from '../Shared/authentication';


class Signup extends Component {
    constructor(props) {
        super(props);

        this.validateEmail = debounce(this.validateEmail, 700, { trailing: true, leading: true });
        this.checkVatNumber = debounce(this.checkVatNumber, 700, { trailing: true, leading: true });

        let product = 'ipass_monthly_eur_25';
        let currency = "eur";
        if (window.location.hostname === 'wifi.flexinets.se') {
            product = 'ipass_monthly_dkk';
            currency = "dkk";
        }

        this.state = {
            name: '',
            companyname: '',
            email: '',
            password: '',
            postcode: '',
            city: '',
            streetaddress: '',
            currency: currency,
            product: product,
            vatnumber: '',
            licenseCount: 1,
            paymentMethod: 'CreditCard',
            products: [
                { id: 'ipass_monthly_dkk', title: 'iPass Monthly Susbcription', price: 186.00, interval: 'Month' },
                { id: 'ipass_monthly_eur_25', title: 'iPass Monthly Susbcription', price: 25.00, interval: 'Month' }
            ]
        };
    }

    async componentWillMount() {
        axios.get('http://localhost:64730/api/settings/stripe').then((response) => {
            this.setState({ stripeKey: response.data });
        });
    }


    getSelectedProduct() {
        return this.state.products.filter(p => p.id === this.state.product)[0];
    }


    /**
     * Get sum excluding any VAT    
     */
    getSum() {
        return this.state.licenseCount * this.getSelectedProduct().price;
    }


    /**
     * Get VAT sum if applicable
     */
    getVat() {
        return this.getSum() * (this.state.vatExempt ? 0 : 0.25);
    }


    /**
     * Get total sum including VAT
     */
    getTotalSum() {
        return this.getVat() + this.getSum();
    }


    handleChange = (event) => {
        let value = undefined;
        switch (event.target.type) {
            case 'checkbox': value = event.target.checked; break;
            case 'number': value = parseInt(event.target.value, 10); break;
            default: value = event.target.value;
        }

        this.setState({ [event.target.name]: value });
    }


    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });

        event.persist();
        this.validateEmail(event);
    }

    validateEmail = async (event) => {
        var result = await checkEmailAvailability(event.target.value);
        if (result) {
            console.debug('clear custom error');
            event.target.setCustomValidity('');
        }
        else {
            console.debug('set custom error');
            event.target.setCustomValidity('Email already registered');
        }
    }


    handleCountryChanged = (country) => {
        this.setState({
            country: country.code,
            vatExempt: !country.eu,
            isEuCountry: country.eu
        });

        if (!country.eu) {
            this.setState({
                vatnumber: '',
                viesName: ''
            });
        }
    }


    handleVatNumberChange = (event) => {
        event.persist();
        this.setState({ vatnumber: event.target.value });
        this.checkVatNumber(event);
    }

    checkVatNumber = async (event) => {
        this.setState({
            checkingVatNumber: true,
            vatExempt: false,
            viesName: ''
        });

        try {
            const response = await axios.get('https://api.flexinets.se/api/validatevatnumber?vatnumber=' + event.target.value);
            if (response.data.result === 'EuVatNumberValid') {
                this.setState({
                    viesName: response.data.name,
                    vatnumber: response.data.parsedVatNumber,
                    vatExempt: true,
                    companyname: this.state.companyname === undefined ? response.data.name : this.state.companyname
                });
            }
        }
        catch (error) {
            console.error(error);
        }
        this.setState({ checkingVatNumber: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formValid = event.target.checkValidity();
        this.setState({ isTouched: true });
        console.debug(formValid);
        if (formValid) {
            if (this.state.paymentMethod !== 'CreditCard') {
                this.setState({ loading: true, processingPayment: true });
                setTimeout(() => {
                    this.setState({ loading: false, processingPayment: false });
                    this.createAccount();
                }, 3000);
            }
        }
    }


    onToken = (event) => {
        console.debug('onToken');
        console.debug(event);
        this.createAccount();
    }


    createAccount() {
        console.debug('create account');
        console.debug('redirect to login and sign in');
    }


    onModalToggle = (event) => {
        event.preventDefault();
        this.setState({ modalOpen: !this.state.modalOpen });
    }



    render() {
        return (
            <Fragment>
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h2 className="mt-2 mb-2">Flexinets Global Wi-Fi</h2>

                    {!this.state.processingPayment &&
                        <form onSubmit={this.handleSubmit} className={this.state.isTouched ? 'was-validated' : ''} noValidate>
                            <div className="card mb-3">
                                <div className="card-body m-2">
                                    <h3 className="text-center">Choose subscription type</h3>
                                    <div className="row pointer">
                                        <div className={this.state.signupType === 'SingleUser' ? 'col btn-policy btn-policy-active' : 'col btn-policy'} onClick={(e) => this.setState({ signupType: 'SingleUser', licenseCount: 1 })} >
                                            <input type="radio" className='sr-only' checked={this.state.signupType === 'SingleUser'} name="signupType" value="SingleUser" onChange={this.handleChange} required />
                                            <h4>Single user</h4>
                                            <h5>{this.getSelectedProduct().price} {this.state.currency.toUpperCase()} / Month</h5>
                                            <small>Excluding VAT</small>
                                            <p className="text-muted">
                                                Sign up as a single user<br />
                                                Connect up to 3 personal devices
                                            </p>
                                        </div>
                                        <div className={this.state.signupType === 'Admin' ? 'col btn-policy btn-policy-active' : 'col btn-policy'} onClick={(e) => this.setState({ signupType: 'Admin' })} >
                                            <input type="radio" className='sr-only' checked={this.state.signupType === 'Admin'} name="signupType" value="Admin" onChange={this.handleChange} required />
                                            <h4>Multiple users</h4>
                                            <h5>{this.getSelectedProduct().price} {this.state.currency.toUpperCase()} / User / Month</h5>
                                            <small>Excluding VAT</small>
                                            <p className="text-muted">
                                                Sign up and manage multiple users<br />
                                                Connect up to 3 devices per user
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="card-body m-2">
                                    {this.state.signupType === 'Admin' &&
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group required">
                                                    <label>Number of users</label>
                                                    <div className="input-group number-spinner">
                                                        <span className="input-group-btn">
                                                            <button type="button" className="btn btn-default btn-info" onClick={(e) => { this.setState({ licenseCount: this.state.licenseCount - 1 }); }} ><span className="fas fa-minus"></span></button>
                                                        </span>
                                                        <input type="number" step="1" required className="form-control text-center no-spinners" name='licenseCount' onChange={this.handleChange} placeholder="Number of device licenses" value={this.state.licenseCount} min="1" max="500" />
                                                        <span className="input-group-btn">
                                                            <button type="button" className="btn btn-default btn-info" onClick={(e) => { this.setState({ licenseCount: this.state.licenseCount + 1 }); }} > <span className="fas fa-plus"></span></button>
                                                        </span>
                                                    </div>
                                                    <small className="text-muted">A user can install and connect up to 3 personal devices simultaneously</small>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="bs-callout bs-callout-info">
                                                    <h4>Orders over 20 users</h4>
                                                    <p className="text-muted">Please contact us for a corporate offer</p>
                                                    <a href="https://www.flexinets.eu/wifi-offer-contact-en/" target="_blank" rel="noopener noreferrer">Contact us <i className="fas fa-external-link-alt"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    }


                                    <hr />
                                    <h3 className="text-center m-4">Create account</h3>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <TextInputValidated type='email' name='email' onChange={this.handleEmailChange} customValidator={() => { return false }} value={this.state.email} label='Email' required placeholder='email@example.com' />
                                        </div>
                                        <div className="col-md-6">
                                            <TextInputValidated type="password" label='Password' name='password' placeholder='Create a password' required value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                    </div>


                                    <hr />
                                    <h3 className="text-center m-4">Billing information</h3>


                                    <div className="row">
                                        <div className="col-md-6">
                                            <TextInputValidated type="text" label='Name' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Firstname Lastname' required />
                                        </div>
                                        <div className="col-md-6">
                                            <TextInputValidated type="text" label='Company name' name='companyname' value={this.state.companyname} onChange={this.handleChange} placeholder='Company name' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <TextAreaInputValidated rows='1' label='Street address' name='streetaddress' value={this.state.streetaddress} onChange={this.handleChange} placeholder='Street address' required />
                                        </div>
                                        <div className="col-md-3">
                                            <TextInputValidated type="text" label='Postcode' name='postcode' value={this.state.poastcode} onChange={this.handleChange} placeholder='Postcode / ZIP' required />
                                        </div>
                                        <div className="col-md-3">
                                            <TextInputValidated type="text" label='City' name='city' value={this.state.city} onChange={this.handleChange} placeholder='City' required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group required">
                                                <label htmlFor='countrySelect'>Country</label>
                                                <CountrySelect id='countrySelect' onCountryChange={this.handleCountryChanged} value={this.state.country} />
                                            </div>
                                        </div>
                                    </div>

                                    {this.state.country === 'DK' &&
                                        <div className="row">
                                            <div className="col-md-6">
                                                <TextInputValidated type="text" label='EAN Number' name='ean' placeholder='EAN Number' />
                                            </div>
                                        </div>
                                    }

                                    {this.state.isEuCountry &&
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <TextInputValidated type="text" label='VAT Number' className="form-control" value={this.state.vatnumber} onChange={this.handleVatNumberChange} placeholder={this.state.country + '00000000'} />
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
                                                    <label className={this.state.paymentMethod === 'CreditCard' ? 'list-group-item list-group-item-action shop-list-active' : 'list-group-item list-group-item-action'}>
                                                        <input type="radio" name="paymentMethod" defaultChecked required value="CreditCard" onChange={this.handleChange} /> <span className="h5"> Credit Card</span> <img src="/Content/img/cc.svg" alt="cclogo" className="cclogo" /> <img className="float-right" src="/Content/img/powered_by_stripe.png" alt="powered by stripe" />
                                                    </label>
                                                    <label className={this.state.paymentMethod === 'Invoice' ? 'list-group-item list-group-item-action shop-list-active' : 'list-group-item list-group-item-action'}>
                                                        <input type="radio" name="paymentMethod" required value="Invoice" onChange={this.handleChange} /> <span className="h5"> Invoice</span> <i className="far fa-envelope"></i> <small className="float-right text-muted">Invoices sent by email {this.state.country === 'DK' && 'or EAN'}</small>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <OrderSummary quantity={this.state.licenseCount} price={this.getSelectedProduct().price} sum={this.getSum()} title={this.getSelectedProduct().title} vat={this.getVat()} currency={this.state.currency} isEuCountry={this.state.isEuCountry} />
                                        </div>
                                    </div>

                                    <div className="custom-control custom-checkbox m-4">
                                        <input type="checkbox" className="custom-control-input" name='accepttermsandconditions' id="accepttoc" required value={this.state.accepttermsandconditions} onChange={this.handleChange} />
                                        <label className="custom-control-label" htmlFor="accepttoc">I have read and accept the</label> <a href="" onClick={this.onModalToggle}>Terms & Conditions</a>
                                    </div>

                                    {this.state.stripeKey &&
                                        <StripeCheckout
                                            disabled={this.state.paymentMethod === 'Invoice'}
                                            name='Flexible Networks Nordic AB'
                                            description={this.getSelectedProduct().title}
                                            currency={this.state.currency.toUpperCase()}
                                            amount={this.getTotalSum() * 100}
                                            image='/content/img/flexinets_logo.png'
                                            email={this.state.email}
                                            allowRememberMe={false}
                                            token={this.onToken}
                                            stripeKey={this.state.stripeKey}
                                        >
                                            <ButtonLoading type="submit" loading={this.state.loading} className="btn btn-block btn-lg btn-primary" value='Pay and Create Account' />
                                        </StripeCheckout>
                                    }
                                </div>
                            </div>
                        </form>
                    }

                    {this.state.processingPayment && <ProcessingPayment />}
                </div>


                <TermsAndConditions onToggle={this.onModalToggle} isOpen={this.state.modalOpen} />
            </Fragment>
        );
    }
}


export default Signup;