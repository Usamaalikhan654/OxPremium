import React from "react";
import Training from "./Training";
import Header from "../../Components/Header/Header.js";
import { Jumbotron, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./Traindisplay.css"

const Traindisplay = () => {
    return (
    <div>
    <div>
      <Header/>
      <Jumbotron fluid className="header1">
    <Container className="text-center">
      <h1 className="head-1">PRODUCTS AND SERVICES</h1>
      <p className="head-1">
      Manufacturing Comfort. Delivering Choice.
      </p>
      <p className="para-1">
      <NavLink to="/Product">Leather Goods And Footwear |</NavLink>
      <NavLink to="/Train"><b>Training and Consultancies |</b></NavLink>
      <NavLink to="/">Procurement Services</NavLink>
  </p>
    </Container>
  </Jumbotron>
  </div>
       <Training/>
       <Footer/>
  </div>
   
    
        
    );
  };
  
  export default Traindisplay;