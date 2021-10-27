import React, { useEffect, useState } from "react";
import "./Services.css";
// import { Link } from "react-router-dom";
import Service from './../Home/Service/Service';

const Services = () => {
  // const [service, setService] = useState("");
  const [allServices, setAllServices] = useState([]);
 

  useEffect(() => {
    fetch(`./data.json`)
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="container all-services">
      <div className="all-service">
        <h1>Our Services</h1>
      </div>
     
      <div className="services">
        <div className="row">
          {allServices?.map(service => <Service
            key={service.ServiceId}
          
            service={service}
          
          ></Service>)}
        </div>
      </div>
    </div>
  );
};

export default Services;