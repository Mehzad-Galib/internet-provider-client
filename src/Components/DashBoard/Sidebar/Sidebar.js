import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faReceipt, faRemoveFormat, faTrademark } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'
import { faFirstOrder, faServicestack } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:8080/isAdmin?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setIsAdmin(true);
        }

        // console.log(data);
      })
      .catch((err) => {});
  });

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to={`/dashboard/bookingList`} className="text-white nav-link active">
          <FontAwesomeIcon icon={faCartPlus} /> <span>Booking List</span>
          </Link>
        </li>
        <li>
          <Link to={`/dashboard/review`} className="text-white nav-link active">
          <FontAwesomeIcon icon={faReceipt} /> <span>Add Review</span>
          </Link>
        </li>

        {isAdmin && (
          <div>
            <li>
              <Link to={`/admin/orderList`} className="text-white nav-link active">
              <FontAwesomeIcon icon={faFirstOrder} /> <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to={`/admin/addService`} className="text-white nav-link active">
              <FontAwesomeIcon icon={faServicestack} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to={`/admin/deleteService`} className="text-white nav-link active">
              <FontAwesomeIcon icon={faRemoveFormat} /> <span>Manage Service</span>
              </Link>
            </li>
            <li>
              <Link to={`/admin/makeAdmin`} className="text-white nav-link active">
              <FontAwesomeIcon icon={faTrademark} /> <span>Make Admin</span>
              </Link>
            </li>
            
          </div>
        )}
      </ul>
      <div>
        
      </div>
    </div>
  );
};

export default Sidebar;
