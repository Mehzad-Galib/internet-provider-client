import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";

const CheckOut = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/checkout/${id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setProduct(data);
        },
        [id]
      );
  }, [id]);

  const { serviceName, price } = product;
  console.log(product);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  

  const handleOrder = () => {
    const allInfo = { ...loggedInUser, orderDate: new Date().toDateString("dd/mm/yyyy"), ...product };
    console.log(allInfo);

    fetch("http://localhost:8080/orderInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("Order Placed Successfully");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <h3>Buyer: {loggedInUser.name}</h3>

      <Table>
        <thead>
          <tr>
            <td>Product Name</td>

            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{serviceName}</td>

            <td>{price}</td>
          </tr>
          <tr>
            <td>Total</td>

            <td>{price}</td>
          </tr>
        </tbody>
      </Table>

      <Button onClick={() => handleOrder()} variant="outline-info">
        Place Order
      </Button>

      <h4 className="mt-3">{message}</h4>
    </div>
  );
};

export default CheckOut;
