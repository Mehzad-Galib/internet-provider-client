import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SimpleCardPay from "./SimpleCardPay";
import './CheckOut.css'

const CheckOut = () => {
  const stripePromise = loadStripe(
    "pk_test_51Ie1nCJB0QTUlblT6uKFn34gl5lYnflJofYxKZhkfWxAXxA7ep3pSOfX5ytnZOLGjy8m2RbfgjKmdJICskq1arWt00WZlnwr1e"
  );

  const [card, setCard] = useState({});
  const cardDetail = (cardInfo)=>{
      setCard(cardInfo)
  }

  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8080/checkout/${id}`)
      .then((res) => res.json())
      .then((data) => {
          const newData = {...data, ...card};
          console.log(newData);
          setProduct(newData);
        });
  }, [card, id]);

  const { serviceName, price, platform } = product;
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleOrder = () => {
    const allInfo = { ...loggedInUser, orderDate: new Date().toDateString("dd/mm/yyyy"), ...product, orderStatus: 'pending' };
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
            <td>Service Name</td>
            <td>Platform</td>
            

            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{serviceName}</td>
            <td>{platform}</td>

            <td>{price}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>

            <td>{price}</td>
          </tr>
        </tbody>
      </Table>
      <div className="col-md-7">
      <Elements stripe={stripePromise}>
        <SimpleCardPay cardDetail={cardDetail} />
      </Elements>
      </div>

      <Button className='mt-3' onClick={() => handleOrder()} variant="outline-success">
        Place Order
      </Button>

      <h4 className="mt-3">{message}</h4>
    </div>
  );
};

export default CheckOut;
