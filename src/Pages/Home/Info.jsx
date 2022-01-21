import React from 'react';
import "./Info.css"
import pic1 from "../../Assets/001.jpg"
import pic2 from "../../Assets/002.jpg"
import pic3 from "../../Assets/surface1.png"
import pic4 from "../../Assets/Engro_Corporation 1.png"
import pic5 from "../../Assets/440px-Engro_Fertilizers_logo 1.png"
import pic6 from "../../Assets/white-logo-01 1.png"
import pic7 from "../../Assets/Group 89.png"
import pic8 from "../../Assets/PROFILE NEW-34 1.png"
import pic9 from "../../Assets/PROFILE NEW-35 1.png"
import pic10 from "../../Assets/content_1564482812-500sharp 1.png"
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import pic11 from "../../Assets/National-Refinery 2.png"
import pic12 from "../../Assets/suzuki-logo-1-1 1.png"
import pic13 from "../../Assets/P_and_G_Procter_and_Gamble_logo 1.png"
import pic14 from "../../Assets/PROFILE NEW-33 1.png"
import pic15 from "../../Assets/1280px-Logo_Alcon 1.png"
import pic16 from "../../Assets/PROFILE NEW-38 1.png"
import pic17 from "../../Assets/PROFILE NEW-36 1.png"
import pic18 from "../../Assets/PROFILE NEW-37 1.png"
import pic19 from "../../Assets/apk.png"
import pic20 from "../../Assets/ivan-zhu.png"
import pic21 from "../../Assets/grid 2.png"
import {Link} from 'react-router-dom';

function Info() {

      return (
        
        <div>      
          <div className="container bg">
            <div className="main-heading row">
              <div className="col-lg-6 text-center">
                <h3 id='about'>About Us</h3>
                <small>Striving for Lifestyle &amp; Safety </small>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="row Fi-region">
              <div className="col-lg-6 page-text">
                <p>With a vision to create ease for our customers, our mission is to deliver premium products and solutions to the requirements of our customers by making processes efficient and hassle free.<br/><br/> 

The combination of this thorough process, extensive experience, creativity and a highly skilled staff helps us to ensure that our customer gets best solutions with highest efficiency. For our customers, we take an active role during the whole purchasing process, monitoring the entire flow from supplier sourcing to final delivery. We ensure to provide solutions that incorporate customized functionality specific to the client’s requirements.<br/><br/> 

Our offering is diverse and it ranges from making finest shoes to premium leather products to sourcing safety PPEs and other industrial & office equipment. We are mindful in crafting, designing and manufacturing our premium shoes collection which includes both consumer & safety shoes. Also, our wide range of quality leather products are the seal of enduring elegance.<br/><br/> 

Our team specializes in sourcing safety PPE’s, Industrial & office equipment and Covid-19 supplies to help our nation through this difficult period.<br/><br/> 

OX Premium Company is a part of Rehmani Group of companies. It is a multidisciplinary company that aims to develop long-term relationships based on trust, transparency and integrity.<br/><br/>
</p>
              </div>
              <div className="col-lg-6 page-image">
              <div className="background-img">
                <img src={pic19} className="img-fluid" width="400px" height="300px" />
              </div>
              </div>
            </div>
            <div className="main-heading row">
              <div className="col-lg-6 text-center">
                <h3 id='offering'>OUR OFFERING</h3>
                <small>Manufacturing Comfort. Delivering Choice.</small>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="row Fi-region">
              <div className="col-lg-6 page-text">
                <p>We offer a wide variety of leather products including footwear, safety shoes, jackets,    bags, satchels, wallets, and other items.<br/><br/>

                   Along with this we have a comprehensive procurement solution including sourcing of Safety PPEs, Covid-19 Supplies, General Gift Items, Office Supplies, Engineering Supplies or any other item of interest for our client. We are a customer centric firm that excels in delivering the right mix to our client.
                </p>
              </div>
              <div className="col-lg-6 page-image">
                {/* <img src={pic2} className="img-fluid size" width="400px" height="300px" /> */}
              <div class="align">
                <div class="row">
                  <div class="col-lg-6 text-white"><img src={pic20} className="img-fluid"/> </div>
                  <div class="col-lg-6 text-white">
                    <p>Footwear & Leather Goods</p>
                    <Link to="/Product">
                    <Button className="grid-button">View</Button>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div class="col-lg-6 text-white"> 
                  <p>Procurement Services</p>
                  <Link to="/Procure">
                  <Button  className="grid-button">View</Button>
                  </Link>
                  </div>
                  <div class="col-lg-6 text-white"><img src={pic21} className="img-fluid"/> </div>
                </div>
               </div>
  
              </div>
            </div>
            <div className="main-heading row">
              <div className="col-lg-6 text-center">
                <h3 id='clients'>OUR CLIENTS AND PARTNERS</h3>
                <small>We Deliver Trust.</small>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="row">
              <div className="col-lg-3 img-box">
                <img src={pic3} className="img-fluid" width="181px" height="181px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic4} className="img-fluid" width="181px" height="181px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic5} className="img-fluid" width="181px" height="181px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic6} className="img-fluid" width="181px" height="181px" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 img-box">
                <img src={pic11} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic12} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic13} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic14} className="img-fluid" width="100px" height="150px" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 img-box">
                <img src={pic7} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic8} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic9} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic10} className="img-fluid" width="100px" height="150px" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 img-box">
                <img src={pic15} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic16} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic17} className="img-fluid" width="100px" height="150px" />
              </div>
              <div className="col-lg-3 img-box">
                <img src={pic18} className="img-fluid" width="100px" height="150px" />
              </div>
            </div>
              {/* <div className="bottom-heading">
                <b>SIGN UP FOR OX UPDATES</b><br />
                <small>Be the first to receive early access to our latest collections, exclusive events and news.</small>
              <Form>
              <Form.Group controlId="formBasicEmail">
              <Form.Control className="typho" type="email" placeholder="Enter your email address" />
              </Form.Group>
              <Button className="button-form" type="submit">
              SIGN UP
            </Button>
              </Form>
              <p className="foot-para">By subscribing, you accept that you like to hear about products, services, events, sales and marketing from OX Premium<br/> (including personalised online content and advertising through OX Premium website, social media platforms or our online<br/> partners). For more details, please read our Privacy Policy.</p>  
              </div> */}
          </div>
          
        </div>
      );
    }

    

export default Info;