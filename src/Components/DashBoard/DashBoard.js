import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className='d-flex mt-5'>
            <div className="col-md-3">
            <Button as={Link} to={`/dashboard/checkout`} variant="outline-info">
          CheckOut
        </Button>
        <br />

        <Button as={Link} to={`/dashboard/bookingList`} variant="outline-info">
          Booking List
        </Button>
        <br />

        <Button as={Link} to={`/dashboard/review`} variant="outline-info">Write a Review</Button>
      </div>
      <div className="col-md-9">

      </div>
            
        </div>
    );
};

export default DashBoard;