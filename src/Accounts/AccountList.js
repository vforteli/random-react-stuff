import React from 'react';
import PaginationControl from '../Shared/PaginationControl';



class AccountList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 851,
            pageSize: 50,
            currentPage: 1,
            maxSize: 9
        }
    }


    pageChanged = (page) => {
        console.debug(`Yay page changed to ${page}`);
        this.setState({ currentPage: page });
    }

    render() {
        return (
            <div className="container">
                <h3>Accounts</h3>                

                <PaginationControl totalCount={this.state.count} pageSize={this.state.pageSize} currentPage={this.state.currentPage} pageChanged={this.pageChanged} />

                <br />
                Current page {this.state.currentPage}
            </div>
        )
    }
}

export default AccountList;