import React from "react";
import Services from "./Services";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header.js";
import { Jumbotron, Container } from "react-bootstrap";
import "./Product.css"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link , NavLink } from "react-router-dom";

const Product = () => {
  return (
  <div>
  <div>
    <Header/>
    <Jumbotron fluid className="header-pic">
  <Container className="text-center">
    <h1 className="head-1">PRODUCTS AND SERVICES</h1>
    <p className="head-2">
    Manufacturing Comfort. Delivering Choice.
    </p>
    <p className="para-1">
    <NavLink to="/Product"><b>Leather Goods And Footwear |</b></NavLink>
    <NavLink to="/Train">Training and Consultancies |</NavLink>
    <NavLink to="/Procure">Procurement Services</NavLink>
</p>
  </Container>
</Jumbotron>
</div>
     <Services/>
</div>
 
  
      
  );
};

export default Product;