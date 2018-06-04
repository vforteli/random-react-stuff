import React, { Component } from 'react';
import axios from 'axios';


export class CountrySelect extends Component {
    constructor(props) {
        super(props);

        this.state = { countries: null };
    }

    componentDidMount() {
        axios.get('/content/countries_en.json').then((response) => {
            this.setState({ countries: response.data });

            axios.get('https://api.flexinets.se/api/location').then((response) => {
                if (response.data.countryCode !== undefined) {
                    const country = this.state.countries.filter(country => country.code === response.data.countryCode)[0];
                    if (this.props.onCountryChange) {
                        this.props.onCountryChange(country);
                    }
                }
            });
        });
    }


    handleCountryChange = (event) => {
        const country = this.state.countries.filter(country => country.code === event.target.value)[0];
        if (this.props.onCountryChange) {
            this.props.onCountryChange(country);
        }
    }


    render() {
        return (
            <select className="form-control" value={this.props.value} required={this.props.required} onChange={this.handleCountryChange}>
                <option value='' disabled>Select country...</option>
                {this.state.countries && this.state.countries.map(country => <option key={country.code} value={country.code}>{country.name}</option>)}
            </select>
        );
    }
}