import React from "react";
import { Card } from "react-bootstrap";
import award1 from "../../../Images/award 1.jpg";
import award2 from "../../../Images/award 2.jpg";
import award3 from "../../../Images/award 3.jpg";

const OurSuccess = () => {
  return (
    <div className="container mt-5"> 
    <h2 className="text-center">Our Success</h2>
        <div className="row">
        <div className="col-md-4">

          <Card>
            <Card.Img style={{height: '250px'}} variant="top" src={award1} />
            <Card.Body>
              <Card.Title>Best ISP in Rajshahi 2020</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
            
          </Card>
          
          
        </div>
        <div className="col-md-4">
        <Card>
            <Card.Img style={{height: '250px'}} variant="top" src={award3} />
            <Card.Body>
              <Card.Title>Best Bandwidth</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
            
          </Card>
        </div>
     <div className="col-md-4">
     <Card>
            <Card.Img style={{height: '250px'}} variant="top" src={award2} />
            <Card.Body>
              <Card.Title>Best Speed</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
            
          </Card>
     </div>
    
        </div>
    </div>
      

  );
};

export default OurSuccess;
