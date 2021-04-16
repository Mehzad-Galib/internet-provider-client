import React, { useEffect, useState } from 'react';
import Review from './Review';

const ShowReview = () => {
    const [feelings, setFeelings] = useState([]);

    useEffect(()=>{
            fetch('http://localhost:8080/review')
            .then(res => res.json())
            .then(data =>{
                setFeelings(data)
                // console.log(data);
            })
    },[])
    return (
        <section className='container mt-5'>
            <h2 className="text-center">Customer Review</h2>
            <div className="row">
            {
                    feelings.map(feeling => <Review key={feeling._id} feeling={feeling} ></Review>)
                }
            </div>
                
           
        </section>
    );
};

export default ShowReview;