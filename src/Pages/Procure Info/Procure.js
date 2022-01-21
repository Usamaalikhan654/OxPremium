import React from 'react'
import Header from '../../Components/Header/Header'
import './procure.css'
import dangree from "../../Assets/Dangree.png"
import steel from "../../Assets/steel pipes.png"
import helmet from "../../Assets/Helmet.png"
import mask from "../../Assets/mask 1.png"
import pnc from "../../Assets/pnc.png"
import cap from "../../Assets/cap.png"
import gown from "../../Assets/gown.png"
import slipper from "../../Assets/slipper.png"
import gloves from "../../Assets/gloves.png"
import mask1 from "../../Assets/mask 2.png"
import Footer from '../../Components/Footer/Footer'

export default function Procure() {
    return (
        <div>
           <Header/>
           <div className="container">
        <div className="heading-set2">
        <h1 >PROCUREMENT SERVICES</h1>
        <small>Shouldering Your Responsibilities</small>
        <hr/>
        </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={dangree} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Dangree</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={steel}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Steel Pipes</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={helmet} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Security Helmet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={mask} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Mask</h5>
          </div>
         </div>

         <div className="row">
          <div className="col-md-3 text-center">
              <img src={pnc} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">PNC</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={cap} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Net Cap</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={gown} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Gown</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={slipper} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Net Slipper</h5>
          </div>
         </div>

         <div className="row">
          <div className="col-md-3 text-center">
              <img src={gloves} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Gloves</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={mask1} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Mask</h5>
          </div>
         </div>
        </div>
        <Footer/>
        </div>
    )
}
