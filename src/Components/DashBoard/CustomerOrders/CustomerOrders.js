import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const CustomerOrders = () => {
    const [info, setInfo] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
            fetch(`http://localhost:8080/purchase?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data=> setInfo(data))
            .catch(err=> {
                console.log(err);
            })
    },[loggedInUser.email])
    return (
        <div className="d-flex">
        
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 container mt-5 mr-5 ml-5">
            <h2 className='text-center'>Your Orders</h2>
                <Table>
                    <thead>
                    <tr>
                        <td>Customer Name</td>
                        <td>Order Date</td>
                        <td>Service</td>
                        <td>Platform</td>
                        <td>Price</td>
                        <td>Email</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        info.map(inf => {
                            return(
                                <tr key={inf._id}>
                                    <td>{inf.name}</td>
                                <td>{inf.orderDate}</td>
                                <td>{inf.serviceName}</td>
                                <td>{inf.platform}</td>
                                <td>{inf.price}Tk</td>
                                <td>{inf.email}</td>
                                
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default CustomerOrders;