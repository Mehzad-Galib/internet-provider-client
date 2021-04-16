import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Sidebar from "../../DashBoard/Sidebar/Sidebar";


const AddService = () => {
  const { register, errors, handleSubmit } = useForm();
  const [image, setImage] = useState(null);
  const onSubmit = (data) => {
    // console.log(data);
    const newData = {...data, imgUrl: image}
    console.log(newData);
    fetch("http://localhost:8080/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
    .then((res) => res.json());
  };

  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '56fe43fe48b43891b85625d12ba9d450');
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      const url = response.data.data.display_url;
      console.log(response.data.data.display_url);
      setImage(url)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="d-flex mt-5">
      <div className="col-md-3">
        
    <Sidebar></Sidebar>     
        
      </div>

      <div className="col-md-9">
        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Service Name</label>
          <input {...register("serviceName", { required: true, maxLength: 80 })} />

         
          <br />

          <label>Platform</label>
          <input {...register("platform", { required: true, maxLength: 80 })} />
          
          <br />

          <label>Price</label>
          <input {...register("price", { required: true, maxLength: 80 })} />
         
          <br />

          <label>Image</label>
          <input name="imgUrl" type="file" onChange={(event)=> handleImageUpload(event)} />
         
          <br />


          <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="outline-primary" onClick={handleSubmit(onSubmit)}>
              
               Add Product
            </Button>
          </Col>
        </Form.Group>
        </form>
      </div>
    </div>
  );
};

export default AddService;