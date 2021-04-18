import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Service.css';
import { Link } from "react-router-dom";

const Service = (props) => {
  const { serviceName, platform, imgUrl, price, _id } = props.service;

  return (
    <div className="col-md-4 col-sm-12 mb-4">
      <div className="card border-0 shadow-lg rounded-3 cardStyle">
        <img src={imgUrl} alt="..." />
        <div className="card-body writing">
          <h4>{serviceName}</h4>
          <h5>{platform}</h5>
        </div>
        <div className="card-footer border-0 bg-white d-flex justify-content-between">
          <h4>
            <b>{price}</b>
          </h4>
          <Button as={Link} to={`/checkout/${_id}`} className="btn d-flex justify-content-center align-items-center">
           
            <div> <FontAwesomeIcon icon={faCartPlus} /> Buy Now</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
