import React from 'react'
import Header from '../../Components/Header/Header'
import bag1 from "../../Assets/Bag 1.png"
import bag2 from "../../Assets/Bag 2.png"
import bag3 from "../../Assets/Bag 3.png"
import bag4 from "../../Assets/Bag 4.png"
import bag5 from "../../Assets/Bag  5.png"
import walet1 from "../../Assets/walet 1.png"
import walet2 from "../../Assets/walet 2.png"
import walet3 from "../../Assets/walet 3.png"
import walet4 from "../../Assets/walet 4.png"
import walet5 from "../../Assets/walet 5.png"
import walet6 from "../../Assets/walet 6.png"
import walet7 from "../../Assets/walet 7.png"
import walet8 from "../../Assets/walet 8.png"
import key1 from "../../Assets/key 1.png"
import key2 from "../../Assets/key 2.png"
import key3 from "../../Assets/key 3.png"
import key4 from "../../Assets/key 4.png"
import key5 from "../../Assets/key 5.png"
import jack1 from "../../Assets/jack 1.png"
import jack2 from "../../Assets/jack 2.png"
import jack3 from "../../Assets/jack 3.png"
import jack4 from "../../Assets/jack 4.png"
import jack5 from "../../Assets/jack 5.png"
import jack6 from "../../Assets/jack 6.png"
import belt1 from "../../Assets/belt 1.png"
import belt2 from "../../Assets/belt 2.png"
import belt3 from "../../Assets/belt 3.png"
import belt4 from "../../Assets/belt 4.png"
import belt5 from "../../Assets/belt 5.png"
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./leather.css";

export default function Leather() {
    return (
        <div>
           <Header/>
           <div className="container">
        <div className="heading-set">
        <h1 >LEATHER GOODS</h1>
        <small>Setting Your Style Priorities</small>
        <hr/>
        <h1 className='display-heading'>Bags</h1>
        </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={bag1} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Messenger Bag</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={bag2}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Messenger Bag</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={bag3} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Shoulder Bag</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={bag4} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Shoulder Bag</h5>
          </div>
         </div>

         <div className="row">
          <div className="col-md-3 text-center">
              <img src={bag5} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Shoulder Bag</h5>
          </div>
         </div>
         <hr/>
         <div className="heading-set1">
         <h1 className='display-heading'>Walets</h1>
         </div>
          <div className="row">
          <div className="col-md-3 text-center">
              <img src={walet1} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={walet2}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={walet3} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={walet4} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
         </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={walet5} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={walet6}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={walet7} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={walet8} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Walet</h5>
          </div>
         </div>
         <div className='row p-0 m-0'>
          <div className='col-lg-12 text-center'>
          <Link to="#" class="view-all-css1" href="#" role="button">VIEW MORE</Link>
          </div>
         </div>

         <hr/>
         <div className="heading-set1">
         <h1 className='display-heading'>Keychains</h1>
         </div>
          <div className="row">
          <div className="col-md-3 text-center">
              <img src={key1} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Keychain</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={key2}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Keychain</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={key3} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Keychain</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={key4} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Keychain</h5>
          </div>
         </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={key5} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Keychain</h5>
          </div>
         </div>

         <hr/>
         <div className="heading-set1">
         <h1 className='display-heading'>Jackets</h1>
         </div>
          <div className="row">
          <div className="col-md-3 text-center">
              <img src={jack1} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Jacket</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={jack2}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Jacket</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={jack3} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Jacket</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={jack4} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Jacket</h5>
          </div>
         </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={jack5} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Jacket</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={jack6} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Jacket</h5>
          </div>
         </div>

         <hr/>
         <div className="heading-set1">
         <h1 className='display-heading'>Belts</h1>
         </div>
          <div className="row">
          <div className="col-md-3 text-center">
              <img src={belt1} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Belt</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={belt2}  className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Belt</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={belt3} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Belt</h5>
          </div>
          <div className="col-md-3 text-center">
              <img src={belt4} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Belt</h5>
          </div>
         </div>
         <div className="row">
          <div className="col-md-3 text-center">
              <img src={belt5} className="Image-size img-fluid"/>
              <h5 className="setting mt-4 text-center">Belt</h5>
          </div>
         </div>

         <div className='row p-0 m-0'>
          <div className='col-lg-12 text-center'>
          <Link to="#" class="view-all-css1" href="#" role="button">VIEW MORE</Link>
          </div>
         </div>
        </div>
        <Footer/>
        </div>
    )
}
