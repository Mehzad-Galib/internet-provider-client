import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/orders")
          .then((res) => res.json())
          .then((data) => {
            setOrders(data);
          }, [orders]);
        });

    return (
        <div className="d-flex">
            <div className="col-md-3">
        
        <Sidebar></Sidebar>     
          
        </div>
        <div className="col-md-9">
            <h2 className='text-center'>Customer Orders</h2>
        <Table bordered hover>
                <thead>
                    <tr>
                        <td>Service Name</td>
                        <td>Customer Name</td>
                        
                        <td>Platform</td>
                        <td>Price</td>
                        <td>Card ID</td>
                        <td>Postal Code</td>
                        
                        <td>Date of Order</td>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => { 
                            return(
                                <tr key={order._id}>
                                <td>{order.serviceName}</td>
                                <td>{order.name}</td>
                                <td>{order.platform}</td>
                                <td>{order.price}</td>
                                <td>{order.cardId}</td>
                                <td>{order.postalCode}</td>
                                <td>{order.orderDate}</td>
                            </tr>
                            )
                        })
                    }
                
                </tbody>
            </Table>

        </div>
        </div>
    );
};

export default OrderList;