import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {UserContext} from '../../../App';

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:8080/isAdmin?email=${loggedInUser.email}`)
    .then(res => res.json())
    .then(data => {
      if(data.length){
        setIsAdmin(true);
      }
      
      // console.log(data);
    })
    .catch(err => {

    })
  })

  return (
    <>
      

      <Button as={Link} to={`/dashboard/bookingList`} variant="outline-info">
        Booking List
      </Button>
      <br />

      <Button as={Link} to={`/dashboard/review`} variant="outline-info">
        Write a Review
      </Button>

      <br />

  {isAdmin && <>
    <Button as={Link} to={`/admin/orderList`} variant="outline-info">
        Order List
      </Button>
      <br />

      <Button as={Link} to={`/admin/addService`} variant="outline-info">
        Add a Service
      </Button>
      <br />

      <Button as={Link} to={`/admin/deleteService`} variant="outline-info">
        Manage Services
      </Button>
      <br />
      <Button as={Link} to={`/admin/makeAdmin`} variant="outline-info">
        Make Admin
      </Button>
  </>}


    </>
  );
};

export default Sidebar;
