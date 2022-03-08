import React from "react"
import Logo1 from "../../Assets/logo 2.png"
import "./Footer.css";
import Facebook from "../../Assets/face.png"
import Twitter from "../../Assets/Vector (1).png"
import Insta from "../../Assets/inst.png"
import Link1 from "../../Assets/link1.png"
import { Link } from "react-router-dom";

const Footer = () => <footer className="page-footer font-small blue pat">
    <div className="container text-center text-md-left">
        {/* <div className="row">
            <div className="col-md-2 mt-md-0 mt-3 text-center">
                    <img src={Logo1}/>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-lg-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">LEATHER GOODS AND FOOTWEAR</h5>
                <ul className="list-unstyled">
                    <li>Footwear</li>
                    <br/>
                    <li>Safety Shoes</li>
                    <br/>
                    <li>Leather Goods</li>
                    <br/>
                    <li>Brand Responsibility</li>
                </ul>
            </div> */}

            {/* <div className="col-lg-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">TRAINING AND CONSULTANCIES</h5>      
            </div> */}
            {/* <div className="col-lg-2 mb-md-0 mb-3">
            <h5 className="text-uppercase">PROCUREMENT SERVICES</h5>
                <ul className="list-unstyled">
                    <li>Safety PPE’s</li>
                    <br/>
                    <li>Covid 19 Supplies</li>
                    <br/>
                    <li>General Gift Items & Office Supplies</li>
                    <br/>
                    <li>Engineering Supplies</li>
                </ul>
            </div> */}
{/* 
        </div> */}
            <div class="row">
                <div class="col-sm-2 mt-md-0 mt-3 text-center">
                <Link to="/"><img src={Logo1}/></Link>
                </div>
                <div class="col-sm-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">FOOTWEAR & LEATHER GOODS</h5>
                <ul className="list-unstyled">
                    <Link to="/Product"><li>Consumer Shoes</li></Link>
                    <br/>
                    <Link to="/Safety"><li>Safety Shoes</li></Link>
                    <br/>
                    <Link to="/Leather"><li>Leather Goods</li></Link>
                </ul>
                </div>
                <div class="col-sm-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">PROCUREMENT SERVICES</h5>
                <ul className="list-unstyled">
                    <li>Safety PPE’s</li>
                    <br/>
                    <li>Covid 19 Supplies</li>
                    <br/>
                    <li>Corporate & Industrial Supplies</li>
                    <br/>
                    <li>Office and general supplies</li>
                </ul>
                </div>

                <div class="col-sm-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Get the freshest ox news</h5>
                <p className="input-para">Be the first to receive early access to our latest collections, exclusive events and news.</p>
                 <form>
                     <input className="field" type="text" placeholder="Your email here"/>
                     <span class="input-group-btn">
                       <button class="btn btn-primary button-style" type="button">Subscribe</button>
                  </span>
                  {/* <label class="checked">By checking the box, you agree to our terms & Conditions and privacy policy
                 <input type="checkbox"/> */}
                 {/* <span class="checkmark"></span>
                </label> */}
                  </form>  
                </div>
            </div>

        <div className="row">
         <div className="col-lg-12 text-center">
         <a href="https://www.facebook.com/oxpremiumcompany/" target="_blank">
            <img className="img1"  src={Facebook}/>
        </a>  
          <a href="https://www.instagram.com/oxfootwearco/?hl=en " target="_blank">
          <img  className="img1" src={Insta}/>
         </a> 
          <a href="https://www.linkedin.com/company/oxpremiumcompany/" target="_blank">
            <img className="img1" src={Link1}/>
       </a>     
           </div> 
        </div>


    </div>
    <div className="container-fluid">
    <div className="row">
  <div className="col-lg-12 footer-bottom-border"></div>
         <div className="col-lg-6 text-center">
              <div className="foot-head">
               <span>Privacy Policy</span>
               <span>TERMS & CONDITIONS</span>
              </div> 
           </div> 

           <div className="col-lg-6 text-center">
              <div className="foot-head1">
               <span>2022 OX Premium Company</span>
              </div> 
           </div> 
           
        </div>
   </div>
</footer>

export default Footer;