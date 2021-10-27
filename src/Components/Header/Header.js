
import {  Link } from 'react-router-dom';

import logo from "../..//images/logo.png";
import "./Header.css"


const Header = () => {
  
    return (
        <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo-img">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-9">
            <div className="menu-container ">
              
        
  

                <div className="d-flex justify-content-end my-5">
                <Link  to="/home" >
                  Home
                </Link>
                
                <Link  to="/about" >
                  About
                </Link>
                
                <Link  to="/contact" >
                  Contact
                </Link>
                <Link  to="/login" >
                  Login
                </Link>

                </div>
                
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;