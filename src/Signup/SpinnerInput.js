import React, { Component, Fragment } from 'react';
import axios from 'axios';


export class SpinnerInput extends Component {
    constructor(props) {
        super(props);

        this.state = { countries: null };
    }


    render() {
        return (
            //<select className="form-control" value={this.props.value} required={this.props.required} onChange={this.handleCountryChange} defaultValue=''>
            //    <option value='' disabled>Select country...</option>
            //    {this.state.countries && this.state.countries.map(country => <option key={country.code} value={country.code}>{country.name}</option>)}
            //</select>
            <div className="input-group number-spinner">
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-info"> <span className="fas fa-minus"></span></button>
                </span>
                <input type="number" step="1" required className="form-control text-center no-spinners" name='licenseCount' onChange={this.handleChange} placeholder="Number of device licenses" value={this.props.value} min="1" max="500" />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-info"> <span className="fas fa-plus"></span></button>
                </span>
            </div>
        );
    }
}