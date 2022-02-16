import React, { Component,useState } from "react";
import "./style.css";
import Logo from "../../Assets/logo 1.png";
import { Navbar,Nav,Form,FormControl,Button, NavDropdown,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchicon from "../../Assets/Group 80.png";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header () {
 
  
const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    return (
<Navbar bg="dark" expand="lg" variant="dark">
<Container className="pt-3">
  <NavLink to="/"><Navbar.Brand><img src={Logo}/></Navbar.Brand></NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link>
          <HashLink smooth to="/#about" >ABOUT US</HashLink>
      </Nav.Link>
       {/* <NavDropdown
          id="nav-dropdown-dark-example"
          title="OUR OFFERING"
          menuVariant="dark"
          show={show}
         onMouseEnter={showDropdown} 
        onMouseLeave={hideDropdown}
        >
          <NavDropdown.Item className="colored"><NavLink to="/Product">Footwear & Leather Goods</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="colored"><NavLink to="/Procure">Procurement Services</NavLink></NavDropdown.Item>
        </NavDropdown> */}
        {/* <Nav.Link href="#link"><HashLink smooth to="/#offering" className="hover-dropdown">OUR OFFERING</HashLink><div class="dropdown-wrap">
          <ul className="d-item-list">
            <li className="d-item"><NavLink to="/Product">Footwear & Leather Goods</NavLink></li>
            <li className="d-item"><NavLink to="/Procure">Procurement Services</NavLink></li>
          </ul>
        </div></Nav.Link> */}

        <Nav.Link>
          <div class="dropdown">
          <HashLink smooth to="/#offering">OUR OFFERING</HashLink>
          <FontAwesomeIcon icon="fa-solid fa-caret-down" />
           <div class="dropdown-content">
              <NavLink className="border-set" to="/Product">Footwear & Leather Goods</NavLink>
              <NavLink to="/Procure">Procurement Services</NavLink>
          </div>
        </div>
        </Nav.Link>
      <Nav.Link><HashLink smooth to="/#clients">OUR CLIENTS & PARTNERS</HashLink></Nav.Link>
      <Nav.Link>
      <NavLink smooth to="/Contact">CONTACT US</NavLink>
      </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search our entire store" className="mr-sm-2" />
      <span className="img"><img className="icon-set" src={Searchicon}/></span>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>

    );
  }


export default Header;