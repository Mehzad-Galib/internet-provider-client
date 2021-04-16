import AdminSidebar from "../AdminSidebar/AdminSidebar";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, errors, handleSubmit } = useForm();
  const [admin, setAdmin] = useState({});
  const onSubmit = (data) => {
    setAdmin(data);
    fetch("http://localhost:8080/addAnAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json());
  };

  return (
    <div className="d-flex mt-5">
      <div className="col-md-3">
        <AdminSidebar></AdminSidebar>
      </div>
      <div className="col-md-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
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
      </div>
    </div>
  );
};

export default MakeAdmin;
