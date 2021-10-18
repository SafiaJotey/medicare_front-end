import React, { useContext } from "react";
import {  NavLink } from 'react-router-dom';
import { userContext } from "./../../App";
import logo from "../..//images/logo.png";

const Header = () => {
    const [user, setUser] = useContext(userContext);
  console.log(user);
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
                
                <NavLink activeStyle={{fontWeight: "bold",color: "#16c2d5", textDecoration:"none",margin:'5px'}} to="/about" >
                About
                </NavLink>
                
                <NavLink activeStyle={{fontWeight: "bold",color: "#16c2d5", textDecoration:"none",margin:'5px'}} to="/contact" >
                  Contact
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