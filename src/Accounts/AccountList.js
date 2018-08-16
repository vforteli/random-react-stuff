import React from 'react';
import PaginationControl from 'flexinets-reactstrap-pagination';
import axios from 'axios';



class AccountList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            pageSize: 50,
            currentPage: 1,
            accounts: null,
            count: 0
        }
    }

    async componentDidMount() {
        const response = await axios.get('/Api/v2/CrmAccounts/');
        this.setState({
            accounts: response.data.Accounts,
            count: response.data.Count
        });
    }




    pageChanged = (page) => {
        console.debug(`Yay page changed to ${page}`);
        this.setState({ currentPage: page });
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




                            <PaginationControl totalCount={this.state.count} pageSize={this.state.pageSize} currentPage={this.state.currentPage} pageChanged={this.pageChanged} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default AccountList;