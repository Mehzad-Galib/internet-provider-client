import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Sidebar from "../../DashBoard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const [orderStatus, setOrderStatus] = useState(null)
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
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9">
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
              <td>Order State</td>
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

                      <select {...register("orderStatus")} >
                          
                      <option>Pending</option>
                      <option value='ongoing'>OnGoing</option>
                      <option value="done">Done</option>
                    </select>
                    
                      </form>

                  </td>
                  <td>
                      <Button onClick={()=>handleUpdate(order._id)}>Update</Button>
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
