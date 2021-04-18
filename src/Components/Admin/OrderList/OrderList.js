import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../../DashBoard/Sidebar/Sidebar";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [confirm, setConfirm] = useState(false);

  const handleStatusChange = (status)=>{
    const info = {id: selectedOrder._id, status};
    console.log(info);
    fetch(`https://fathomless-ridge-55165.herokuapp.com/updateOrderStatus`,{
        method:'POST',
        headers: { "Content-type": "application/json" },
      body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(success => {
      setConfirm(true)
      console.log(success);
    })
    .catch(err => {})
  }

  useEffect(() => {
    fetch("https://fathomless-ridge-55165.herokuapp.com/orders")
      .then((res) => res.json())
      .then(
        (data) => {
          setOrders(data);
        },
        [orders]
      );
  });
  

  return (
    <div className="d-flex">
      <div className="col-md-3 col-sm-12">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 col-sm-12 container">
        <h2 className="text-center">Customer Orders</h2>
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
              <td>Set Status</td>
              <td>Current Status</td>
              
              
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order._id}>

                  <td>{order.serviceName}</td>
                  <td>{order.name}</td>
                  <td>{order.platform}</td>
                  <td>{order.price}</td>
                  <td>{order.cardId}</td>
                  <td>{order.postalCode}</td>
                  <td>{order.orderDate}</td>
                  <td>
                      <select
                      onClick={() => setSelectedOrder(order)}
                      onChange={e => handleStatusChange(e.target.value)}
                      className={
                        order.orderStatus === 'Pending' ?
                        'text-danger' : order.orderStatus === 'Ongoing' ?
                        'text-warning' : 'text-success'
                      }
                      >
                        <option selected={order.orderStatus === 'Pending'} className="bg-white text-secondary">Pending</option>
                        <option selected={order.orderStatus === 'Ongoing'} className="bg-white text-secondary">Ongoing</option>
                        <option selected={order.orderStatus === 'Done'} className="bg-white text-secondary">Done</option>
                        
                      </select>

                  </td>
                  <td>{order.orderStatus}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
        {
          confirm ? <h4 style={{color: 'green'}}>Order state updated successfully</h4> : null
        }
      </div>
      
    </div>
  );
};

export default OrderList;
