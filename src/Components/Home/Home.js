import React from "react";
import "./home.css";
import Footer from "../Footer/Footer";
import Services from "../Services/Services.js";

import Banner from "./../Banner/Banner";
import Vision from './Vision/Vision';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Vision></Vision>
      <Footer></Footer>
    </div>
  );
};

export default Home;