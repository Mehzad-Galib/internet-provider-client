import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const DeleteService = () => {
    const [service, setService] = useState([])
    const handleDelete = (id) =>{
            fetch(`http://localhost:8080/delete/${id}`, {
                method: 'DELETE'
            })
            .then(result=> {

            })
    }

    useEffect(()=>{
        fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(data =>{
                setService(data)
    })
    })
    return (
        <div className="d-flex">
            <div className="col-md-3">
        
        <Sidebar></Sidebar>     
          
        </div>
        <div className="col-md-9">
        <h2 className='text-center'>Manage Services</h2>
        <Table bordered hover>
                <thead>
                    <tr>
                        <td>Service Name</td>
                        <td>Platform</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map(service => { 
                            return(
                                <tr key={service._id}>
                                <td>{service.serviceName}</td>
                                <td>{service.platform}</td>
                                <td>{service.price}</td>
                                <td><Button onClick={()=> handleDelete(service._id)} variant="outline-info">Delete</Button></td>
                            </tr>
                            )
                        })
                    }
                
                </tbody>
            </Table>
        </div>
        </div>
    )
};

export default DeleteService;