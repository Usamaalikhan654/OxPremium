import React, { Component } from "react";
import "./style.css";
import Logo from "../../Assets/OX\ Logo-04\ 1.png";
import { Navbar,Nav,Form,FormControl,Button, NavDropdown,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchicon from "../../Assets/Group 80.png";
import { NavLink } from "react-router-dom";



export default class Header extends Component {
  render() {
    return (
<Navbar bg="dark" expand="lg" variant="dark">
<Container className="pt-3">
  <Navbar.Brand><img src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link>
          <NavLink to="/">ABOUT US</NavLink>
      </Nav.Link>
      <Nav.Link>
          <NavLink  to="/Product">PRODUCT AND SERVICES</NavLink>
      </Nav.Link>
      <Nav.Link href="#link">OUR CLIENTS & PARTNERS</Nav.Link>
      <Nav.Link href="#link">CONTACT US</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search our entire store" className="mr-sm-2" />
      <span className="img"><img src={Searchicon}/></span>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>

    );
  }
}
