import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { createContext, useState } from "react";
import Login from './Components/Login/Login';
import Home from './Components/HomePage/Home';
import NavbarHeader from './Components/HomePage/TopBanner/NavbarHeader/NavbarHeader';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard';
import AddService from './Components/Admin/AddService/AddService';
import OrderList from './Components/Admin/OrderList/OrderList';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import DeleteService from './Components/Admin/DeleteService/DeleteService';
import AddReview from './Components/DashBoard/AddReview/AddReview';
import CheckOut from './Components/DashBoard/CheckOut/CheckOut';
import CustomerOrders from './Components/DashBoard/CustomerOrders/CustomerOrders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <NavbarHeader></NavbarHeader>
        <Switch>

       
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard/bookingList">
            <CustomerOrders></CustomerOrders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>

         

          <PrivateRoute path="/admin/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/admin/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin/deleteService">
            <DeleteService></DeleteService>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
