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
            <h2 style={{color: 'indigo'}} className="text-center">BroadBand Services</h2>
            <div className="row mt-3">
                {
                    services.map(service => <Service key={service._id} service={service}></Service> )
                }
            </div>
        </div>
    );
};

export default ShowServices;