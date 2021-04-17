import React, { useEffect, useState } from 'react';
import Service from './Service';

const ShowServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
            fetch('https://fathomless-ridge-55165.herokuapp.com/services')
            .then(res => res.json())
            .then(data =>{
                setServices(data)
                
            })
    },[])

    return (
        <div className="container mt-4">
            <h2 className="text-center">Our Services</h2>
            <div className="row">
                {
                    services.map(service => <Service key={service._id} service={service}></Service> )
                }
            </div>
        </div>
    );
};

export default ShowServices;