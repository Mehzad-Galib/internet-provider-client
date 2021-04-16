import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AdminPanel = () => {
    return (
        <div className='d-flex mt-5'>
            <div className="col-md-3">

            <Button as={Link} to={`/admin/orderList`} variant="outline-info">
          Order List
        </Button>
        <br />

        <Button as={Link} to={`/admin/addService`} variant="outline-info">
          Add a Service
        </Button>
        <br />

        <Button as={Link} to={`/admin/manageService`} variant="outline-info">Write a Manage Service</Button>
        <br />

        <Button as={Link} to={`/admin/makeAdmin`} variant="outline-info">Make Admin</Button>

      </div>
      <div className="col-md-9">

      </div>
            
        </div>
    );
};

export default AdminPanel;