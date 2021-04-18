import React from "react";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import './login.css';
import { faUser } from "@fortawesome/free-regular-svg-icons";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [confirm, setConfirm] = useState(``);
  const [userData, setUserData] = useState({});
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = (data) => {
    setUserData(data);
    const { email, password, firstName } = data;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        setConfirm(`${firstName} Logged in Successfully`);
        const signedInUser = { name: firstName, email: email };
        setLoggedInUser(signedInUser)
        history.replace(from);
      })
      .catch((error) => {
        setConfirm(error.message);
      });
  };

  const onLogin = (data) => {
    setUserData(data);
    const { email, password, firstName } = data;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        setConfirm(`${firstName} Logged in Successfully`);
        const signedInUser = { name: firstName, email: email };
        setLoggedInUser(signedInUser)
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setConfirm(errorMessage);
        console.log(error.message);
      });
  };

  

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="container mt-5 loginPage">
      {loggedInUser.name ? (
        <h4 className="text-center"><FontAwesomeIcon icon={faUser} /> {loggedInUser.name}</h4>
      ) : (
        <h4 className="text-center">Please Login to Continue</h4>
      )}

      <form className='loginForm' onSubmit={handleSubmit(onSubmit || onLogin)}>

        <label>First name</label>
        <input
          type="text"
          
          {...register("firstName", {required: true})}
        />

        <label>Email</label>
        <input
          type="text"
          {...register("email", {
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
        />
        <label>Password</label>
        <input
          type="password"
          
          {...register("password", {required: true})}
          
        />
        {userData.email && <h4>{confirm}</h4>}

        
      </form>
      <div className='login-btn'>
      <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="outline-primary" onClick={handleSubmit(onSubmit)}>
              {" "}
               Sign Up
            </Button>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="outline-primary" onClick={handleSubmit(onSubmit)}>
              {" "}
              Login
            </Button>
          </Col>
        </Form.Group>
      
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="outline-primary" onClick={handleGoogleLogin}>
              {" "}
              <FontAwesomeIcon icon={faGoogle} /> Continue with Google
            </Button>
          </Col>
        </Form.Group>
      </div>
    </div>
  );
};
export default Login;
