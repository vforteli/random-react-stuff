import React from 'react';
import PaginationControl from 'flexinets-reactstrap-pagination';
import axios from 'axios';
import qs from 'qs';
import debounce from 'debounce-promise';



class AccountList extends React.Component {
    constructor(props) {
        super(props);
        const queryString = qs.parse(this.props.location.search.slice(1));


        this.state = {
            pageSize: 50,
            currentPage: queryString.page ? parseInt(queryString.page) : 1,
            accounts: null,
            count: 0,
            searchString: queryString.search ? queryString.search : ""
        }
    }

    async componentDidMount() {
        await this.fetchAccounts()
    }

    async fetchAccounts() {
        console.debug('fetching accounts');
        const response = await axios.get(`/Api/v2/CrmAccounts/?page=${this.state.currentPage}&search=${this.state.searchString}`);
        this.setState({
            accounts: response.data.Accounts,
            count: response.data.Count
        });
    }


    handleSearch = (e) => {
        this.setState({ searchString: e.target.value, currentPage: 1 }, () => {
            this.debouncedSearch(this.state.searchString);
        });
    }


    debouncedSearch = debounce(async (value) => {
        console.debug(`Searching for: ${value}`);
        await this.fetchAccounts();
    }, 700, { leading: true });



    pageChanged = async (page) => {
        console.debug(`Yay page changed to ${page}`);
        this.setState({ currentPage: page }, async () => {
            await this.fetchAccounts();
            this.props.history.push(`/accounts?page=${page}`);
        });

    }

    render() {
        return (
            <div className="container">
                <h3>Accounts</h3>

                {this.state.accounts === null &&
                    <div className="text-center">
                        <div className="chartloading"></div>
                        <h4>Getting accounts...</h4>
                    </div>
                }

                {this.state.accounts !== null &&
                    <div className="card mb-3">
                        <div className="card-body">

                            <div className="row">
                                <div className="col-sm-9">
                                    <a ui-sref="accounts.detail.create" className="btn btn-primary"><i className="fas fa-plus"></i> New account</a>
                                </div>
                                <div className="col-sm-3">
                                    <span className="input-group">
                                        <input name="Search" type="search" value={this.state.searchString} onChange={this.handleSearch} className="form-control" placeholder="Search accounts..." />
                                        <span className="input-group-btn">
                                            <button type="submit" ng-click="search(model.searchterm)" className="btn btn-default"><i className="fas fa-search"></i></button>
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <PaginationControl totalCount={this.state.count} pageSize={this.state.pageSize} maxSize={10} currentPage={this.state.currentPage} pageChanged={this.pageChanged} />
                            <table className="table table-hover users-table">
                                <thead>
                                    <tr className="d-none d-md-table-row">
                                        <td>Common name</td>
                                        <td>Address name</td>
                                        <td>ExternalId</td>
                                        <td>Customer type</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.accounts.map(account =>
                                        <tr key={account.CRMAccountID}>
                                            <td>{account.CommonName}</td>
                                            <td>{account.AddressName}</td>
                                            <td>{account.ExternalID}</td>
                                            <td>{account.CystomerType}</td>
                                            <td><a ui-sref="accounts.detail.edit(::{ accountid: item.CRMAccountID })"><i className="fas fa-edit"></i></a></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            <PaginationControl totalCount={this.state.count} pageSize={this.state.pageSize} maxSize={10} currentPage={this.state.currentPage} pageChanged={this.pageChanged} />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default AccountList;