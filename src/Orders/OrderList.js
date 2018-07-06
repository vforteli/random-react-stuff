import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import moment from 'moment';

class OrdersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: null,
            count: 0
        };
    }

    async componentDidMount() {
        const response = await axios.get('/api/orders');
        this.setState({
            orders: response.data.Orders,
            count: response.data.Count
        });
    }




    render() {
        return (
            <div className="container">
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
                            <Link to='/users/create' className="btn btn-primary"><span className="fas fa-plus"></span> Create order</Link>{' '}
                            <button className="btn btn-info"><i class="fas fa-cloud-upload-alt"></i> Send to Accounting</button>{' '}
                            <button className="btn btn-info"><i class="fas fa-cloud-upload-alt"></i> Send to Danfoss</button>


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
                                        <tr key={order.OrderId}>
                                            <td className="wrapcolumn">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" required />
                                                    <label className="custom-control-label"></label>
                                                </div>
                                            </td>
                                            <td>{order.status === 0 && <i className={order.hold ? 'fas fa-pause text-warning' : 'fas fa-check text-success'}></i>}</td>
                                            <td>
                                                {order.CustomerType === 'Private' && <i class="fas fa-user"></i>}
                                                {order.CustomerType === 'Paper' && <i class="fas fa-envelope-square"></i>}
                                                {order.CustomerType === 'EInvoice' && <i class="fab fa-cloudversify"></i>}
                                            </td>
                                            <td><Link to={'/orders/edit/' + order.invoice_id}>{order.address_name}</Link></td>
                                            <td>{moment(order.date_created).format('DD MMMM YYYY')}</td>
                                            <td>{order.date_invoices && moment(order.date_invoiced).format('DD MMMM YYYY')}</td>
                                            <td className="no-wrap">{order.TotalsumExcludingVAT} {order.CurrencyName}</td>
                                            <td><Link to={'/orders/delete/' + order.invoice_id}><i className="fas fa-times"></i></Link></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        );
    }
}


export default OrdersList;