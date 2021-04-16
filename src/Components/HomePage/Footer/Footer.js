import React from 'react';

const Footer = () => {
    return (
        <section className="container">
            
            <div className="bg-secondary mb-3 mt-5 p-5 text-center">
                <h3 style={{color: 'white'}}><b>Let's Stay in Touch</b></h3>
                <p >Subscribe to Get updates on upcoming <br/>Connection Deals and Updated Prices</p>
                <input type="email" placeholder="Enter Your E-mail Here"/><br/>
                <button className="btn btn-warning text-center ">Subscribe</button>
            </div>
       
        </section>
    );
};

export default Footer;