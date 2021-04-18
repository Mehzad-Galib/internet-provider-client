import React, { useEffect, useState } from 'react';
import Review from './Review';

const ShowReview = () => {
    const [feelings, setFeelings] = useState([]);

    useEffect(()=>{
            fetch('https://fathomless-ridge-55165.herokuapp.com/review')
            .then(res => res.json())
            .then(data =>{
                setFeelings(data)
               
            })
    },[])
    return (
        <section className='container mt-5'>
            <h2 style={{color: 'magenta'}} className="text-center">Testimonials</h2>
            <div className="row mt-3">
            {
                    feelings.map(feeling => <Review key={feeling._id} feeling={feeling} ></Review>)
                }
            </div>
                
           
        </section>
    );
};

export default ShowReview;