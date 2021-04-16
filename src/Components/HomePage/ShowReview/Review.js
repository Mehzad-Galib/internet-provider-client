import React from "react";


const Review = (props) => {
  const { userName, company, review, imgUrl } = props.feeling;
  
  return (
    <div className="col-md-4 col-sm-12 mb-4">
      <div className="card h-100 border-0 shadow-lg rounded-3">
        <img src={imgUrl} alt="..." />
        <div className="card-body">
          <h4>{userName}</h4>
          <h5>{company}</h5>
        </div>
        <div className="card-footer border-0 bg-white d-flex justify-content-between">
          <h4>
            <b>{review}</b>
          </h4>

          
        </div>
      </div>
    </div>
  );
};

export default Review;
