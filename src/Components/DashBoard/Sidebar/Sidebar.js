import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Button as={Link} to={`/dashboard/checkout`} variant="outline-info">
        CheckOut
      </Button>
      <br />

      <Button as={Link} to={`/dashboard/bookingList`} variant="outline-info">
        Booking List
      </Button>
      <br />

      <Button as={Link} to={`/dashboard/review`} variant="outline-info">
        Write a Review
      </Button>
    </>
  );
};

export default Sidebar;
