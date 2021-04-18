import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Sidebar from "../../DashBoard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const [orderStatus, setOrderStatus] = useState(null)
  const [confirm, setConfirm] = useState('');

  const onSubmit = (data)=>{
        console.log(data.orderStatus);
        setOrderStatus(data.orderStatus)
  }
  const handleUpdate = id =>{
    
    const allInfo = {orderStatus, id};
    console.log(allInfo);
    fetch(`https://fathomless-ridge-55165.herokuapp.com/updateOrderStatus`,{
        method:'POST',
        headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allInfo)
    })
    .then(res => res.json())
    .then(success => {
      setConfirm('Updated')
      console.log(success);
    })
    .catch(err => setConfirm(err.message))
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
      <div className="col-md-9 col-sm-12">
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
              <td>Order update</td>
              
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
                      <form onChange={handleSubmit(onSubmit)}>

                      <select value={order.orderStatus} {...register("orderStatus")} >
                          
                      <option value="pending">Pending</option>
                      <option value="ongoing">OnGoing</option>
                      <option value="done">Done</option>
                    </select>
                    
                      </form>

                  </td>
                  <td>{order.orderStatus}</td>
                  <td>
                      <Button onClick={()=>handleUpdate(order._id)}>Update</Button><br/>
                      {confirm}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderList;
