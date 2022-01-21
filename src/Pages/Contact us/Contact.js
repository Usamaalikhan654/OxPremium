import React from 'react';
import Header from "../../Components/Header/Header.js";
import { Jumbotron, Container,Row  } from "react-bootstrap";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from './ContactForm.jsx';
import Footer from '../../Components/Footer/Footer.js';

class Contact extends React.Component {
    render () {
  return (

  <div>
      <div className="container-fluid p-0">

      <Header/>
      <Jumbotron fluid className="header-pic-3">
    <Container className="text-center">
      <h1 className="head-1">CONTACT US</h1>
      <p className="head-2">
      How can we help?
      </p>
    </Container>
  </Jumbotron>
  </div>
  <div className='cont'>
  <Container className='content'>
   <Row>
      <div className='col-lg-12'>
      <p className='setting-para'>We’re happy to answer any questions you have or provide you with an estimate.<br/> Just send us a message in the form below with any questions you may have.</p>
      </div>
   </Row>
  <Row>
          <div className="col-lg-6">
            <ContactForm />
          </div>
          <div className="col-lg-6 mt-5 topic">
            <ul class="fa-ul inline">
            <li className='set1'>
            <FontAwesomeIcon icon="fa-light fa-location-dot" />
            <span>Mehdi Tower, Suite 201-202, SMCHS, Main Shahrah-e-Faisal, Karachi</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faEnvelope} color="#c6ce3a" />
                <a className='set' href="#">Info@theoxpremiumcompany.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} rotation={90} color="#c6ce3a" />{" "}
                <span className='set2'>+92 213 4322238-39</span>
              </li>
            </ul>
          </div>
        </Row>
        </Container>
        </div>
        <Footer/>
 </div>     
) 
} 
}

export default Contact;
