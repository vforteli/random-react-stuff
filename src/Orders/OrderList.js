import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import moment from 'moment';
import DeleteOrderModal from './DeleteOrderModal';
import OrderDetail from './OrderDetail';
import CreateOrderDetail from './CreateOrderDetail';
import CustomerTypeIcon from './CustomerTypeIcon';

class OrdersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: null,
            count: 0,
            isDeleteModalOpen: false
        };
    }

    async componentDidMount() {
        const response = await axios.get('/api/orders');
        this.setState({
            orders: response.data.Orders,
            count: response.data.Count
        });
    }


    confirmDeleteOrder = (order) => {
        this.setState({ isDeleteModalOpen: true, deleteOrder: order });
    }


    onClosed = async (result) => {
        if (result) {
            const response = await axios.get('/api/orders/');
            this.setState({ users: response.data });
        }
        this.props.history.push('/orders');
    }


    onDeleteOrderModalClosed = (result) => {
        this.setState({ isDeleteModalOpen: false, deleteOrder: null });
        if (result) {
            this.setState({ orders: this.state.orders.filter(o => o.invoice_id !== result) });
        }
    }




    render() {
        return (
            <div className="container">
                {this.state.isDeleteModalOpen && <DeleteOrderModal onClosed={this.onDeleteOrderModalClosed} deleteOrder={this.state.deleteOrder} />}

                <h3>Orders</h3>

                {this.state.orders === null &&
                    <div className="text-center">
                        <div className="chartloading"></div>
                        <h4>Getting orders...</h4>
                    </div>
                }



                {this.state.orders && this.state.orders.length > 0 &&
                    <div className="card mb-3">
                        <Route path="/users/create" />
                        <Route path="/users/edit/:id" />
                        <div className="card-body">
                            <Link to='/orders/create' className="btn btn-primary"><span className="fas fa-plus"></span> Create order</Link>{' '}
                            <button className="btn btn-info"><i className="fas fa-cloud-upload-alt"></i> Send to Accounting</button>{' '}
                            <button className="btn btn-info"><i className="fas fa-cloud-upload-alt"></i> Send to Danfoss</button>


                            <table className="table table-hover users-table">
                                <thead>
                                    <tr className="d-none d-md-table-row">
                                        <td className="wrapcolumn"></td>
                                        <td>#</td>
                                        <td>Type</td>
                                        <td>Name</td>
                                        <td>Created</td>
                                        <td>Sent</td>
                                        <td>Sum</td>
                                        <td className="wrapcolumn"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.orders.map(order =>
                                        <tr key={order.invoice_id}>
                                            <td className="wrapcolumn">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" required />
                                                    <label className="custom-control-label"></label>
                                                </div>
                                            </td>
                                            <td>{order.status === 0 && <i className={order.hold ? 'fas fa-pause text-warning' : 'fas fa-check text-success'}></i>}</td>
                                            <td><CustomerTypeIcon customerType={order.CustomerType} /></td>
                                            <td><Link to={'/orders/edit/' + order.invoice_id}>{order.address_name}</Link></td>
                                            <td>{moment(order.date_created).format('DD MMMM YYYY')}</td>
                                            <td>{order.date_invoices && moment(order.date_invoiced).format('DD MMMM YYYY')}</td>
                                            <td className="no-wrap">{order.TotalsumExcludingVAT} {order.CurrencyName}</td>
                                            <td><a href="" onClick={(e) => { e.preventDefault(); this.confirmDeleteOrder(order); }}><i className="fas fa-times"></i></a></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }

                <Route path="/orders/create" render={props => <CreateOrderDetail {...props} onClosed={this.onClosed} />} />
                <Route path="/orders/edit/:orderid" render={props => <OrderDetail {...props} onClosed={this.onClosed} />} />
            </div>
        );
    }
}


export default OrdersList;