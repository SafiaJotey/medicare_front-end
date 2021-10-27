import React from 'react';
import "./Service.css";
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
   
     const{Service,img,description}= service;
    
    return (
     

        
             <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img src={img} alt="" />
                </div>
                <div className="text-area">
                  <h3>{Service}</h3>
                  <p>{description}</p>
                  
                  <Link to="">
                    <button className="btn">Details</button>
                 </Link>
                </div>
              </div>
            </div>
       
    );
};

export default Service;