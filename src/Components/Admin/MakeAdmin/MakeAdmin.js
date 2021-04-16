import AdminSidebar from "../AdminSidebar/AdminSidebar";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Sidebar from "../../DashBoard/Sidebar/Sidebar";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [confirm, setConfirm] = useState(null);
  const onSubmit = (data) => {
    
    fetch("http://localhost:8080/makeAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(result => {
      setConfirm(data.email)
    })
    
  };

  return (
    <div className="d-flex mt-5">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Add an Email</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </form>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="outline-primary" onClick={handleSubmit(onSubmit)}>
              
               Add Admin
            </Button>
          </Col>
        </Form.Group>
            {
              confirm && <h4>{confirm} successfully added as an admin</h4>
            }
      </div>
    </div>
  );
};

export default MakeAdmin;
