import React from 'react';
import './About.css'
import about from '../../images/about.jpg'
import dr1 from '../../images/dr1.jpg'
import dr2 from '../../images/dr2.jpg'
import dr3 from '../../images/dr3.jpg'
import dr4 from '../../images/dr4.jpg'





const About = () => {
    return (
      
        <div className='about container '>
             
            <div >
                <h1>ABOUT US</h1>
                    <div className="row d-flex justify-content-center align-items-center details">
                        <div className="col-12 col-lg-6">
                        <img src={about} alt="" />
                        </div>
                        <div className="col-12 col-lg-6 text-lg-start">
                       
                       <h3> We Offer <br></br>
                        Fast & Reliable </h3> 
                        <h1>
                        <span>
                        Medical & HealthCare <br></br>
                        Solutions to Our Patients
                        </span>
                        
                        </h1>
                        <p className='text-justify'>We are determined to satisfy you with our care and service. You are our priority, medicare team aims to comfort you with a trustworthy medical service. Your healthy and comfortable life is our vision.  Lead a healthy and beautiful life. We are always here for you</p>
                        </div>
                        
                    </div>
            </div>
            <div className="team_grid container">
                    
                    <h2>Meet Our Top Doctors</h2>
                <div className="row container">
                                <div className="col-12 col-md-3  gallery_img">
                                        <div className="overlay ">
                                                <a href="#"><img src={dr1}/></a>
                                        </div>
                                        <h5>Dr. William Mason</h5>
                                            <p>CHIEF DOCTOR</p>
                                </div>
                                <div className="col-12 col-md-3 gallery_img">
                                            <div className="overlay">
                                                <a href="#"><img src={dr2}/></a>
                                            </div>
                                            <h5>Dr. Amelia Grace
                                            </h5>
                                            <p>SENIOR DOCTOR</p>
                                </div>
                                <div className="col-12 col-md-3 gallery_img">
                                            <div className="overlay ">
                                            <a href="#"><img src={dr3}/></a>
                                            </div>
                                            <h5>Dr. James Daniel</h5>
                                            <p>PHYSICIAN </p>
                                </div>
                                
                                <div className="col-12 col-md-3 gallery_img">
                                    <div className="overlay ">
                                                <a href="#"> <img src={dr4}/></a>
                                    </div>
                                    <h5>Dr. Wiken Jeson</h5>
                                            <p>SURGON</p>
                                </div>
                
                                
                </div>
        </div>
        
             
        </div>
    );
};

export default About;