import React from "react";
import { Card } from "react-bootstrap";
import sponsor1 from "../../../Images/sponsor1.jpg";
import sponsor2 from "../../../Images/sponsor2.jpg";
import sponsor3 from "../../../Images/sponsor3.jpg";
import sponsor4 from "../../../Images/sponsor4.jpg";

const Sponsors = () => {
  return (
    <section className="container mt-5">
        <h2 style={{color: 'cyan'}} className="text-center mb-2">Our Sponsors</h2>
      <div className="row mt-3">

        <div className="col-md-3 col-sm-6">
          <Card>
            <Card.Img style={{height: '200px'}} variant="top" src={sponsor1} />
            <Card.Body>
              <Card.Title>Lenovo</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Img style={{height: '200px'}} variant="top" src={sponsor2} />
            <Card.Body>
              <Card.Title>Apple</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Img style={{height: '200px'}} variant="top" src={sponsor3} />
            <Card.Body>
              <Card.Title>Adidas</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Img style={{height: '200px'}} variant="top" src={sponsor4} />
            <Card.Body>
              <Card.Title>Microsoft</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;
