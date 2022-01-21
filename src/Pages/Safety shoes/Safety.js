import React from 'react'
import Header from '../../Components/Header/Header'
import './safety.css'
import prod1 from "../../Assets/OX Buffer Mid Cut S3.png"
import prod2 from "../../Assets/OX Buffer Mid Cut S1P.png"
import prod3 from "../../Assets/OX Buffer Mid Cut S1P 1.png"
import prod4 from "../../Assets/OX-Biker Boots.png"
import prod5 from "../../Assets/Hush Puppies Safety Shoe.png"
import prod6 from "../../Assets/OX Buffer S1P Low Cut.png"
import prod7 from "../../Assets/Hush Puppies Safety Shoes- Low Cut without laces.png"
import Footer from '../../Components/Footer/Footer'

export default function Safety() {
    return (
        <div>
           <Header/>
           <div className="container">
        <div className="heading-set">
        <h1 >SAFETY SHOES</h1>
        <small>Let Them Do the Talking</small>
        <hr/>
        </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={prod1} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">OX Buffer Mid Cut S3</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={prod2}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">OX Buffer Mid Cut S1P</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={prod3} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">OX Buffer Mid Cut S1P</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={prod4} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">OX-Biker Boots</h5>
          </div>
         </div>

         <div className="row">
          <div className="col-md-3 text-center">
              <img src={prod5} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Hush Puppies Safety Shoe</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={prod6} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">OX Buffer S1P Low Cut</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={prod7} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Hush Puppies Safety Shoes-<br/> Low Cut without laces</h5>
          </div>
         </div>
        </div>
        <Footer/>
        </div>
    )
}
