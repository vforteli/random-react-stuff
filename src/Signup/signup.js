import React, { Component, Fragment } from 'react';
import axios from 'axios';
import debounce from 'debounce-promise';

import { ButtonLoading } from '../Shared/components';
import TermsAndConditions from './TermsAndConditions';
import { CountrySelect } from './CountrySelect';
import { ProcessingPayment } from './ProcessingPayment';
import { OrderSummary } from './OrderSummary';
import TextInputValidated from '../Shared/TextInputValidated';
import TextAreaInputValidated from '../Shared/TextAreaInputValidated';
import { checkEmailAvailability } from '../Shared/authentication';
import ValidatedForm from '../Shared/ValidatedForm';
import { createStripeHandler } from '../Shared/StripeHandler';

// todo refactor the products into a cart of some sort

class Signup extends Component {
    constructor(props) {
        super(props);

        let product = 'ipass_monthly_eur_25';
        let currency = "eur";
        if (window.location.hostname === 'wifi.flexinets.se') {
            product = 'ipass_monthly_dkk';
            currency = "dkk";
        }

        this.state = {
            name: 'test test',
            companyname: 'test company',
            email: 'testtt@example.com',
            password: 'testtt',
            postcode: '0000',
            city: 'test',
            streetaddress: 'test test',
            //name: '',
            //companyname: '',
            //email: '',
            //password: '',
            //postcode: '',
            //city: '',
            //streetaddress: '',
            country: '',
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


    async componentDidMount() {
        this.stripeHandler = await createStripeHandler((token) => { this.createAccount(token); });
    }


    componentWillUnmount() {
        if (this.stripeHandler) {
            this.stripeHandler.close();
        }
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


    validateEmail = debounce(checkEmailAvailability, 700, { leading: true });


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
        this.setState({ vatnumber: event.target.value });
        this.checkVatNumber(event.target.value);
    }


    checkVatNumber = debounce(async (value) => {
        this.setState({
            checkingVatNumber: true,
            vatExempt: false,
            viesName: ''
        });

        try {
            const response = await axios.get(`https://api.flexinets.se/api/validatevatnumber?vatnumber=${value}`);
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
    }, 700, { leading: true });


    handleSubmit = (event) => {
        console.debug('handleSubmit');
        if (this.state.paymentMethod === 'CreditCard') {
            console.debug('handling payment with stripe');
            this.stripeHandler.open({
                description: this.getSelectedProduct().title,
                currency: this.state.currency.toUpperCase(),
                amount: this.getTotalSum() * 100,
                email: this.state.email
            });
        }
        else {
            console.debug('handling payment with invoice');
            this.setState({ loading: true, processingPayment: true });
            setTimeout(() => {
                this.setState({ loading: false, processingPayment: false });
                this.createAccount();
            }, 3000);
        }
    }


    createAccount(stripeToken) {
        // todo aaaah do i have to use redux now?
        const model = {
            name: this.state.name,
            companyname: this.state.companyname,
            email: this.state.email,
            password: this.state.password,
            postcode: this.state.postcode,
            city: this.state.city,
            streetaddress: this.state.streetaddress,
            country: this.state.country,
            currency: this.state.currency,
            product: this.state.product,
            vatnumber: this.state.vatnumber,
            licenseCount: this.state.licenseCount,
            paymentMethod: this.state.paymentMethod,
            stripeToken: stripeToken,
            signupType: this.state.signupType,
            ean: this.state.ean,
            vatExempt: this.state.vatExempt
        };
        console.debug('create account');
        console.debug(model);
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
                        <ValidatedForm onSubmit={this.handleSubmit}>
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
                                            <TextInputValidated type='email' name='email' onChange={this.handleChange} customValidator={this.validateEmail} value={this.state.email} label='Email' required placeholder='email@example.com' />
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
                                            <TextInputValidated type="text" label='Postcode' name='postcode' value={this.state.postcode} onChange={this.handleChange} placeholder='Postcode / ZIP' required />
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
                                                <TextInputValidated type="text" label='EAN Number' name='ean' onChange={this.handleChange} value={this.state.ean} placeholder='EAN Number' />
                                            </div>
                                        </div>
                                    }

                                    {this.state.isEuCountry &&
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <TextInputValidated type="text" label='VAT Number' className="form-control" value={this.state.vatnumber} onChange={this.handleVatNumberChange} placeholder={this.state.country + '00000000'}>
                                                        {this.state.checkingVatNumber && <p>Checking VAT Number...</p>}
                                                        {this.state.viesName && <p>{this.state.viesName}</p>}
                                                        {this.state.vatnumber && !this.state.vatExempt && !this.state.checkingVatNumber && <p>This does not appear to be an EU vat number</p>}
                                                        <small className="text-muted">If you have a valid EU VAT number please enter it here starting with the country code</small>
                                                    </TextInputValidated>
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
                                                        <input type="radio" name="paymentMethod" checked={this.state.paymentMethod === 'CreditCard'} required value="CreditCard" onChange={this.handleChange} /> <span className="h5"> Credit Card</span> <img src="/Content/img/cc.svg" alt="cclogo" className="cclogo" /> <img className="float-right" src="/Content/img/powered_by_stripe.png" alt="powered by stripe" />
                                                    </label>
                                                    <label className={this.state.paymentMethod === 'Invoice' ? 'list-group-item list-group-item-action shop-list-active' : 'list-group-item list-group-item-action'}>
                                                        <input type="radio" name="paymentMethod" checked={this.state.paymentMethod === 'Invoice'} required value="Invoice" onChange={this.handleChange} /> <span className="h5"> Invoice</span> <i className="far fa-envelope"></i> <small className="float-right text-muted">Invoices sent by email {this.state.country === 'DK' && 'or EAN'}</small>
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


                                    <ButtonLoading type="submit" loading={this.state.loading} className="btn btn-block btn-lg btn-primary">Pay and Create Account</ButtonLoading>
                                </div>
                            </div>
                        </ValidatedForm>
                    }

                    {this.state.processingPayment && <ProcessingPayment />}
                </div>


                <TermsAndConditions onToggle={this.onModalToggle} isOpen={this.state.modalOpen} />
            </Fragment>
        );
    }
}


export default Signup;