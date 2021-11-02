import React from 'react';
import { useParams } from 'react-router';
import "./ServiceDetails.css"
import { useEffect,useState } from 'react';


const ServiceDetails = (props) => {
    
    const { id } = useParams();
    const [serviceDetails,setServiceDetails]=useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data[`${id-1}`]))
    }, [])

   
    

    return (
        <div className="detail">
            <h1>MEDICARE</h1>
            <div className="row d-flex justify-content-center align-items-center my-5">
                        <div className="col-md-7">
                            <img src={serviceDetails.img} alt="" />
                            <h2>{serviceDetails.Service}</h2>
                             <p>{serviceDetails.description}</p>
                        </div> 
                
            </div>

        </div>
    );
};

export default ServiceDetails;