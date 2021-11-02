import React from "react";
import "./Banner.css";
import Header from './../Header/Header';
import banner from "../..//images/banner.png";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          
          <div className="col-md-5 p-4">
            <h1 className="title ">
              YOUR HEALTH, <br /> OUR FIRST PRIORITY
            </h1>
            <p className="text-white text-center mt-3">
            Healthcare Pharmaceuticals limited (HPL) is one of the best kinds of company in the pharmaceutical industry in Bangladesh.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-7">
          <div className="logo-img">
              <img className="w-75" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;