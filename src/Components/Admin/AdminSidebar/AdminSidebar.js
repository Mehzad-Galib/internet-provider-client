import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (                   
    <>
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
    </>
  );
};

export default AdminSidebar;
