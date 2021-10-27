
import {  NavLink } from 'react-router-dom';

import logo from "../..//images/logo.png";
import "./Header.css"
import Contact from './../Contact/Contact';

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
                <NavLink activeStyle={{fontWeight: "bold",color: "#16c2d5", textDecoration:"none",margin:'5px'}} to="/home" >
                  Home
                </NavLink>
                
                <NavLink activeStyle={{fontWeight: "bold",color: "#16c2d5", textDecoration:"none",margin:'5px'}} to="/home" >
                  About
                </NavLink>
                
                <NavLink activeStyle={{fontWeight: "bold",color: "#16c2d5", textDecoration:"none",margin:'5px'}} to="/home" >
                  Contact
                </NavLink>
                <NavLink activeStyle={{fontWeight: "bold",color: "#16c2d5", textDecoration:"none",margin:'5px'}} to="/home" >
                  Login
                </NavLink>

                </div>
                
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;