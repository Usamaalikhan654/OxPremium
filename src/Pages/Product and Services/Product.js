import React from "react";
import Services from "./Services";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header.js";
import { Jumbotron, Container } from "react-bootstrap";
import "./Product.css"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from "react-router-dom";

const Product = () => {
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
  <Breadcrumb>
  <Breadcrumb.Item active><Link to={"/Product"}>Products</Link></Breadcrumb.Item>
  <Breadcrumb.Item>
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
</p>
  </Container>
</Jumbotron>
</div>
     <Services/>
</div>
 
  
      
  );
};

export default Product;