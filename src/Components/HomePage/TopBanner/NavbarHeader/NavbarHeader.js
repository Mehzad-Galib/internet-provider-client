import { Link } from "react-router-dom";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";


const NavbarHeader = () => {
  
  return (
    <>
      <nav bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
        <div className="container-fluid">
          <Navbar.Brand as={Link} to={`/home/`} className="navbar-brand">
            Raj Net BD
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item nav-link active">
                
                 <Nav.Link as={Link} to={`/home/`}>Home</Nav.Link>
                
              </li>

              <li className="nav-item nav-link active">
                
                 <Nav.Link as={Link} to={`/dashboard/review`}>DashBoard</Nav.Link>
                
              </li>

             

              <li className="nav-item nav-link active">
                
                 <Nav.Link as={Link} to={`/home/`}>About Us</Nav.Link>
                
              </li>
              <li className="nav-item nav-link active">
                 <Button as={Link} to={`/login/`} variant="outline-info">Login</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHeader;
