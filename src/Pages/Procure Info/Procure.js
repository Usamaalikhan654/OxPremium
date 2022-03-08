import React from 'react'
import Header from '../../Components/Header/Header'
import helmet1 from "../../Assets/Helmet-13 1.png"
import Elbow from "../../Assets/p-39.png"
import helmet2 from "../../Assets/p-33.png"
import helmet4 from "../../Assets/p-40.png"
import gloves5 from "../../Assets/p-43.png"
import gogles from "../../Assets/p-34.png"
import dangree from "../../Assets/image-01.png"
import harness from "../../Assets/p-35.png"
import statue from "../../Assets/p-04.png"
import Mask from "../../Assets/p-05.png"
import slipper from "../../Assets/slipper.png"
import Grown from "../../Assets/p-07.png"
import Mask1 from "../../Assets/Mask.png"
import gloves from "../../Assets/p-06.png"
import Mask2 from "../../Assets/p-38 1.png"
import Mask3 from "../../Assets/p-32.png"
import Suit from "../../Assets/p-01.png"
import steel from "../../Assets/steel-pipes.png"
import valding from "../../Assets/images-52 1.png"
import Electric from "../../Assets/electric.png"
import Solar from "../../Assets/solar.png"
import Fire from "../../Assets/fire.png"
import Tower from "../../Assets/images-50 1.png"
import Cable from "../../Assets/cable tray.png"
import Basket from "../../Assets/p-45.png"
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./procure.css";

export default function Leather() {
    return (
        <div>
           <Header/>
           <div className="container">
        <div className="heading-set">
        <h1 >PROCUREMENT SERVICES</h1>
        <small>Shouldering Your Responsibilities</small>
        <hr/>
        <h1 className='display-head'>Safety PPEs</h1>
        </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={helmet1} className="Image-size img-fluid"/>
              <h5 className="mt-4 text-center sub-head">Safety Helmet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={Elbow}  className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Elbow and Knee Protection Cap</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={helmet2} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Saftey Sheild</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={helmet4} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Rebreather</h5>
          </div>
         </div>

         <div className="row">
          <div className="col-md-3 text-center">
              <img src={gloves5} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Leather Gloves</h5>
          </div>

          <div className="col-md-3 text-center">
              <img src={gogles} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Safety Goggles</h5>
          </div>

          <div className="col-md-3 text-center">
              <img src={dangree} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Overall</h5>
          </div>

          <div className="col-md-3 text-center">
              <img src={harness} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Safety Harness</h5>
          </div>
         </div>
         <div className='row p-0 m-0'>
          <div className='col-lg-12 text-center'>
          <Link to="#" class="view-all-css1" href="#" role="button">VIEW MORE</Link>
          </div>
         </div>
         <hr/>
         <div className="heading-set1">
         <h1 className='display-head'>Medical Supplies</h1>
         </div>
          <div className="row">
          <div className="col-md-3 text-center">
              <img src={statue} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Net Cap</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={Mask}  className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Cotton Mask</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={slipper} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Net Slipper</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={Grown} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Gown</h5>
          </div>
         </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={Mask1} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Surgical Mask</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={gloves}  className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Gloves</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={Mask2} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">KN95</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={Mask3} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Fabric Mask</h5>
          </div>
         </div>
         <div className='row p-0 m-0'>
          <div className='col-lg-12 text-center'>
          <Link to="#" class="view-all-css1" href="#" role="button">VIEW MORE</Link>
          </div>
         </div>

         <hr/>
         <div className="heading-set1">
         <h1 className='display-head'>Engineering Supplies</h1>
         </div>
          <div className="row">
          <div className="col-md-3 text-center">
              <img src={Suit} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Overall</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={steel}  className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Steel Pipes</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={valding} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Paint Shop/ Powder Spray</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={Electric} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Electrical Panel</h5>
          </div>
         </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={Solar} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">DC Solar Water Pump</h5>
          </div>

          <div className="col-md-3 text-center">
              <img src={Fire} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Fire Bucket</h5>
          </div>

          <div className="col-md-3 text-center">
              <img src={Tower} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Power Transmission Towers</h5>
          </div>

          <div className="col-md-3 text-center">
              <img src={Cable} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Cable Tray Supporting Systems</h5>
          </div>
         </div>

         <div className='row p-0 m-0'>
          <div className='col-lg-12 text-center'>
          <Link to="#" class="view-all-css1" href="#" role="button">VIEW MORE</Link>
          </div>
         </div>

         <hr/>
         <div className="heading-set1">
         <h1 className='display-head'>General Supplies & Marketing Supplies</h1>
         </div>
          <div className="row">
          <div className="col-md-3 text-center">
              <img src={Basket} className="Image-size img-fluid"/>
              <h5 className="sub-head mt-4 text-center">Gift Basket</h5>
          </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
