import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const AddReview = () => {

  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(``);

  const onSubmit = (data) =>{
    const userData = {...data, imgUrl: image}
    console.log(userData);
    fetch("https://fathomless-ridge-55165.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
    .then((res) => res.json())
    .then((result=> setMessage(`Review Added Successfully`)));
  }

  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '56fe43fe48b43891b85625d12ba9d450');
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      const url = response.data.data.display_url;
      console.log(response.data.data.display_url);
      setImage(url);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  return (
    <>
      <div className="d-flex">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-9">
            <h2 className='text-center'>Add a Review</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>User Name</label>
            <input
              {...register("userName", { required: true, maxLength: 80 })}
            />

            

            <label>Company/Organization</label>
            <input
              {...register("company", { required: true, maxLength: 80 })}
            />

            

            <label>Review</label>
            <input {...register("review", { required: true, maxLength: 80 })} />

            
            <label>Image</label>
          <input name="imgUrl" type="file" onChange={(event)=> handleImageUpload(event)} />

          

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button
                  variant="outline-primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Add Review
                </Button>
              </Col>
            </Form.Group>
          </form>
          <h4 style={{color: 'green'}} className='mt-3'>{message}</h4>
        </div>
      </div>
    </>
  );
};

export default AddReview;
