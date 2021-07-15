import React from "react";
import Info from "../Home/Info"
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header.js";
import headerphoto from "../../Assets/Group 1.png"
import { Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
  <div>
  <div>
    <Header/>
    <div className="custom-container">
    <img src={headerphoto} className="img-fluid" />
   </div>

</div>
     <Info/>
    <Footer/>
</div>
 
  
      
  );
};

export default Home;