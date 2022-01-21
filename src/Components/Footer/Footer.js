import React from "react"
import Logo1 from "../../Assets/OX Logo-04 2.png"
import "./Footer.css";
import Facebook from "../../Assets/Vector-1.png"
import Twitter from "../../Assets/Vector (1).png"
import Insta from "../../Assets/Vector (2).png"
import Print from "../../Assets/Vector (3).png"

const Footer = () => <footer className="page-footer font-small blue pat">
    <div className="container text-center text-md-left">
        <div className="row">
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
            </div>

            {/* <div className="col-lg-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">TRAINING AND CONSULTANCIES</h5>      
            </div> */}
            <div className="col-lg-4 mb-md-0 mb-3">
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
            </div>
        </div>
        <div className="row">
         <div className="col-lg-12 text-center">
            <img className="img1"  src={Facebook}/>
            <img className="img1"  src={Twitter}/>
            <img  className="img1" src={Insta}/>
            <img className="img1" src={Print}/>
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
               <span>2021 OX Premium Company, All Rights Reserved.</span>
              </div> 
           </div> 
           
        </div>
   </div>
</footer>

export default Footer;