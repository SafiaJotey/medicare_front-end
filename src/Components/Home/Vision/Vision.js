import React from 'react';
import vision from "../../../images/vision.jpg"
import "./Vision.css"

const Vision = () => {
    return (
      
        <div class="container vision my-5">
             <h2>OUR VISION</h2>
             <p>We are determined to satisfy you with our care and service. You are our priority, medicare team aims to comfort you with a trustworthy medical service. Your healthy and comfortable life is our vision.  Lead a healthy and beautiful life. We are always here for you</p>
            <div class="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center  ">
                
                <div class="col-md-7">
                
                
                    <div >
                        <img className="img" src={vision} alt="" />
                    </div>
                </div>
                <div class="col-md-5">
                  <div className="row  card">
                    
                        <div className="col-12 my-5  d-md-flex justify-content-center align-items-center  my-md-0 ">
                            <a href=""><i class="fas fa-calendar-alt"></i></a>
                            <div className="my-5 my-md-2"> 
                            <h4 >24/7 hour service</h4>
                            <p className=" ms-5"> Get 24/7 medical checkup when you need </p>
                            </div>
                            
                        </div>
                    
                </div>
                <div className="row  card">
                    
                    <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0 ">
                        <a href=""><i class="fas fa-ambulance"></i></a>
                        <div className="my-5 my-md-2"> 
                            <h4>Ambulance Service</h4>
                            <p className="ms-5">Our skilled team is always ready to help you</p>
                         </div>
                    </div>
                </div>
              
                <div className="row  card">
                    
                    <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0">
                        <a href=""><i class="fas fa-user-md"></i></a>
                    
                        <div className="my-5  my-md-2"> 
                        <h4>24/7 hour service</h4>
                        <p className="ms-5">You are our priority.We are here always for you. </p>
                        </div>
                        
                    </div>
                </div>   
            </div>
            
         </div>
    </div>   
    );
};

export default Vision;