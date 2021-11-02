import React from "react";
import "./home.css";

import Services from "../Services/Services.js";

import Banner from "./../Banner/Banner";
import Vision from './Vision/Vision';
import Gallery from "./Gallery/Gallery";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Vision></Vision>
      <Gallery></Gallery>
     
    </div>
  );
};

export default Home;