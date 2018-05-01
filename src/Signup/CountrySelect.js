import React, { Component } from 'react';
import axios from 'axios';


export class CountrySelect extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        axios.get('/content/countries_en.json').then((response) => {
            this.setState({ countries: response.data });
        });
    }


    render() {
        return (
            <select className="form-control" ng-model="model.country" required ng-options="country.code as country.name for country in countries" ng-change="countryChanged(model.country)">
                <option value="" disabled selected>Select country...</option>
            </select>
        );
    }
}