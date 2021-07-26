import React from "react";
import Procurement from "./Procurement";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header.js";
import { Jumbotron, Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link , NavLink } from "react-router-dom";

const ProcurementServices = () => {
  return (
  <div>
  <div>
    <Header/>
    <Jumbotron fluid className="header-pic">
  <Container className="text-center">
    <h1 className="head-1">PRODUCTS AND SERVICES</h1>
    <p className="head-1">
    Manufacturing Comfort. Delivering Choice.
    </p>
    <p className="para-1">
    <NavLink to="/Product">Leather Goods And Footwear |</NavLink>
    <NavLink to="/Train">Training and Consultancies |</NavLink>
    <NavLink to="/Procure"><b>Procurement Services</b></NavLink>
</p>
  </Container>
</Jumbotron>
</div>
     <Procurement/>
     <Footer/>
</div>
 
  
      
  );
};

export default ProcurementServices;