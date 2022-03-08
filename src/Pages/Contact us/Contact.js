import React from 'react';
import Header from "../../Components/Header/Header.js";
import { Jumbotron, Container,Row  } from "react-bootstrap";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from './ContactForm.jsx';
import Footer from '../../Components/Footer/Footer.js';
import location from "../../Assets/location-dot.png";
import Mail from "../../Assets/mail.png";
import Phone from "../../Assets/Phone.png";
import facebook from "../../Assets/face-black.png";
import Insta from "../../Assets/insta-black.png";
import Link from "../../Assets/link-black.png";

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
          <div className='row mb-5'>
            <div className='col-2 d-flex justify-content-center align-items-center'>
            <img  src={location}/>{" "}
            </div>
            <div className='col-10'>
            <span className='set1'>Mehdi Tower, Suite 201-202, SMCHS, Main Shahrah-e-Faisal, Karachi</span>
             </div>
          </div>

          <div className='row mb-5'>
            <div className='col-2 d-flex justify-content-center align-items-center'>
                <img    src={Mail}/>{" "}
               
            </div>
            <div className='col-10'>
                <a className='set' href="#">Info@theoxpremiumcompany.com</a>
            </div>
          </div>

          <div className='row'>
             <div className='col-2 d-flex justify-content-center align-items-center'>
                <img  src={Phone}/>{" "}
             </div>
             <div className='col-10'>
                <span className='set2'>+92 213 4322238-39</span>
             </div>
          </div>
          <hr/>
                <a href='https://www.facebook.com/oxpremiumcompany/' target='_blank'><img style={{paddingRight: "10px"}} src={facebook}/></a>
                <a href='https://www.instagram.com/oxfootwearco/?hl=en' target='_blank'><img style={{paddingRight: "10px"}} src={Insta}/></a>
                <a href='https://www.linkedin.com/company/oxpremiumcompany/' target='_blank'><img src={Link}/></a> 
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
