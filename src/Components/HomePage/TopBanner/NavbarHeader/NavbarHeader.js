import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSignInAlt, faWifi } from "@fortawesome/free-solid-svg-icons";

const NavbarHeader = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  useEffect(() => {
    fetch(
      `https://fathomless-ridge-55165.herokuapp.com/isAdmin?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setIsAdmin(true);
          
        }
        
      })
      .catch((err) => {});
  });

  return (
    <>
      <nav
        bg="dark"
        variant="dark"
        className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark"
      >
        <div className="container-fluid">
          <Navbar.Brand as={Link} to={`/`} className="navbar-brand">
          <FontAwesomeIcon icon={faWifi} /> Raj Net BD
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item nav-link active">
                <Nav.Link as={Link} to={`/home/`}>
                  Home
                </Nav.Link>
              </li>

             

              {isAdmin ? 
              (<div>
                <li className="nav-item nav-link active">
                  <Nav.Link as={Link} to={`/admin/orderList`}>
                    DashBoard
                  </Nav.Link>
                </li>
              </div>) : 
              (<div>
                <li className="nav-item nav-link active">
                  <Nav.Link as={Link} to={`/dashboard/review`}>
                    DashBoard
                  </Nav.Link>
                </li>
              </div>)
              }


              <li className="nav-item nav-link active">
              <Nav.Link to='/services'>
                    Services
                  </Nav.Link>
              </li>

              {loggedInUser.email ? 
              (<div>
                <li className="nav-item nav-link active">
                <Nav.Link>
                <FontAwesomeIcon icon={faUserCircle} /> {loggedInUser.name}
                </Nav.Link>
                  
                </li>
                </div>)
               : 
               (<div>
                <li className="nav-item nav-link active">
                  <Button as={Link} to={`/login/`} variant="outline-info">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                  </Button>
                </li>
                </div>)
              }

              {loggedInUser.email && (<div>
              <li className="nav-item nav-link active">
                  <Button as={Link} to={`/login/`} variant="outline-info">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login from another Account
                  </Button>
                </li>
              </div>)}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHeader;
