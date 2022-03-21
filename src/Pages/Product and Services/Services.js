import React, { Component,useState } from 'react';
import "./Services.css"
import photo from "../../Assets/Group 10955.png"
import Smphoto1 from "../../Assets/images-03.png";
import Lgphoto1 from "../../Assets/images-10.png";
import Smphoto2 from "../../Assets/images-07.png"
import Lgphoto2 from "../../Assets/images-14.png"
import Smphoto3 from "../../Assets/images-06.png"
import Lgphoto3 from "../../Assets/images-13.png"
import Smphoto4 from "../../Assets/images-04.png"
import Lgphoto4 from "../../Assets/images-11.png"
import Smphoto6 from "../../Assets/bag1.png"
import Lgphoto6 from "../../Assets/images-34.png"
import Smphoto7 from "../../Assets/images-26.png"
import Lgphoto7 from "../../Assets/belt 1-2.png"
import Smphoto8 from "../../Assets/b1 1.png"
import Lgphoto8 from "../../Assets/images-30.png"
import Smphoto10 from "../../Assets/images-05.png"
import Smphoto11 from "../../Assets/images-18.png"
import Lgphoto10 from "../../Assets/images-40.png"
import arrownext from "../../Assets/arrow-next.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import Smphoto12 from "../../Assets/Group 1-2.png"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Smphoto13 from "../../Assets/images-15.png"
import Lgphoto13 from "../../Assets/images-50.png"
import Smphoto14 from "../../Assets/images-19.png"
import Lgphoto14 from "../../Assets/images-53.png"
import Smphoto15 from "../../Assets/images-21.png"
import Lgphoto15 from "../../Assets/images-55.png"
import Lgphoto11 from "../../Assets/images-47.png"
import Smphoto17 from "../../Assets/Hush Puppies Safety Shoes- Low Cut without laces.png"
import Lgphoto17 from "../../Assets/images-12.png"
import Lgphoto12 from "../../Assets/Group 1-2.png"
import Smphoto18 from "../../Assets/images-01.png"
import Lgphoto18 from "../../Assets/images-08.png"
import Smphoto19 from "../../Assets/wall1.png"
import Lgphoto19 from "../../Assets/images-35.png"
import Smphoto20 from "../../Assets/hang-bag.png"
import Lgphoto20 from "../../Assets/images-31.png"
import Smphoto21 from "../../Assets/images-17.png"
import Lgphoto21 from "../../Assets/images-43.png"

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
      nav4: null,
      nav5: null,
      nav6: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3,
      nav4: this.slider4,
      nav5: this.slider5,
      nav6: this.slider6
    });
  }

  render() {     
    return (
      <div  className="contain">
        <div className="container-bg">
        <div className="container">
        <div className="sub-container">
          <div className="main-heading row">
            <div className="col-lg-6 text-center">
              <h3 className='sub-main-heading'>FOOTWEAR  &amp; LEATHER GOODS </h3>
              <small>Quality, Durability &amp; Finesse – Our Promise </small>
            </div>
          </div>
          <hr className="hr-line" />
          <div id='1'  className="row Fi-region">
            <div className="col-lg-6 page-text">
              <p>We at OX Premium Company believe that quality leather products are the one which are handled by
                experienced craftsmanship. Our passion for perfection symbolizes tradition and our products are a
                seal of timeless elegance. We take complete pride in our products because we craft with love, care
                and aesthetics.</p>
                <div className="head1 row"> 
                  <div className="col-lg-4 button-element">
                      <Link  to="/Consume"><Button className="button-content text-right">Consumer Shoes</Button></Link>
                  </div>
                  <div className="col-lg-4">
                  <Link to="/Safety"><Button className="button-content">Safety Shoes</Button></Link>
                 </div>
                 <div className="col-lg-4">
                   <Link to="/Leather"><Button className="button-content text-left">Leather Goods</Button></Link>
                </div>
                </div>
            </div>
            <div className="col-lg-6 page-image">
              <img src={photo} className="img-fluid pixel"/>
            </div>
          </div>
          </div>
          </div>
        </div>
          <div className="container bg">
          <div className="main-heading row">
            <div className="col-lg-6 text-center">
              <h3 className='sub-main-heading'>CONSUMER SHOES</h3>
              <small>Let Them Do the Talking </small>
            </div>
          </div>
          <hr className="hr-line" />
                  <Slider>
          <div id="2" className="row Fi-region">
            <div className="col-lg-6 page-text">
                    <div className="left-slider">
                      <p>We offer all types of shoes  both in leather material such as milled grain, nubuck, suede and others materials like flyknit and canvas. We are aligned with largest shoe manufacturers in Pakistan and can supply wide variety of shoes in vast quantities.</p>
                      <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                       <div>
                          <img src={Smphoto12} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto11} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto10} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto13} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto14} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto15} className="img-fluid" width="210px" />
                        </div>
                      </Slider>
                      
                    </div>
            </div>
            <div className="back-img" style={{  backgroundImage: "url(" + { arrownext } + ")" }}>
            </div>
            <div className="col-lg-6 page-image">
              <div className="images-box1">
              <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                      >
                        <div>
                          <img src={Lgphoto13} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto14} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto15} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto12} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto11} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto10} className="img-fluid" />
                        </div>
                        
                      </Slider>
              </div>   
              <div className='row p-0 m-0 position-relative'>
                <div className='col-12 text-center'>
                <Link to="/Consume" class="view-all-css" href="#" role="button">VIEW ALL</Link>
                </div>
              </div> 
            </div>
          </div>
         
                  </Slider>

          <div className="main-heading row">
            <div className="col-lg-6 text-center">
              <h3 className='sub-main-heading'>SAFETY SHOES</h3>
              <small>Sturdy. Rigid. Lasting.</small>
            </div>
          </div>
          <hr className="hr-line" />
          <Slider>
          <div id="3" className="row Fi-region">
            <div className="col-lg-6 page-text">
                    <div className="left-slider">
                      <p>Our Safety Shoes collection is meant to carry your weight and keep you safe in all environments and under all conditions. They are made suitable for HSE requirement for industries like Power Generation, Construction, Manufacturing, Oil & Gas and Outdoor works. We take special pride in providing the utmost quality combined with meticulous craft.</p>
                      <Slider
                        asNavFor={this.state.nav3}
                        ref={slider => (this.slider4 = slider)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                       <div>
                          <img src={Smphoto2} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto3} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto4} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto1} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto17} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto18} className="img-fluid" width="210px" />
                        </div>
                      </Slider>
                      
                    </div>
            </div>
            <div className="back-img" style={{  backgroundImage: "url(" + { arrownext } + ")" }}>
            </div>
            <div className="col-lg-6 page-image">
              <div className="images-box1">
              <Slider
                        asNavFor={this.state.nav4}
                        ref={slider => (this.slider3 = slider)}
                      >
                        <div>
                          <img src={Lgphoto1} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto17} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto18} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto2} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto3} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto4} className="img-fluid" />
                        </div>

                      </Slider>
              </div>
              <div className='row p-0 m-0 position-relative'>
                <div className='col-12 text-center'>
                <Link to="/Safety" class="view-all-css" href="#" role="button">VIEW ALL</Link>
                </div>
              </div> 
            </div>
          </div>
                  </Slider>
          <div className="main-heading row">
            <div className="col-lg-6 text-center">
              <h3 className='sub-main-heading'>LEATHER GOODS</h3>
              <small>Setting Your Style Priorities</small>
            </div>
          </div>
          <hr className="hr-line" />
          <Slider>
          <div id="4" className="row Fi-region">
            <div className="col-lg-6 page-text">
                    <div className="left-slider">
                      <p>Add perfect finish to your flair and don’t go unrecognized with our style statements. Ox Premium
                Company’s versatile leather accessories add finesse to your style frotm dawn to dusk.</p>
                      <Slider
                        asNavFor={this.state.nav5}
                        ref={slider => (this.slider6 = slider)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                       <div>
                          <img src={Smphoto6} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto7} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto8} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto19} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto20} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smphoto21} className="img-fluid" width="210px" />
                        </div>
                      </Slider>
                      
                    </div>
            </div>
            <div className="back-img" style={{  backgroundImage: "url(" + { arrownext } + ")" }}>
            </div>
            <div className="col-lg-6 page-image">
              <div className="images-box1">
              <Slider
                        asNavFor={this.state.nav6}
                        ref={slider => (this.slider5 = slider)}
                      >
                        <div>
                          <img src={Lgphoto19} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto20} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto21} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto6} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto7} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgphoto8} className="img-fluid" />
                        </div>

                      </Slider>
              </div>
              <div className='row p-0 m-0 position-relative'>
                <div className='col-12 text-center'>
                <Link to="/Leather" class="view-all-css" href="#" role="button">VIEW ALL</Link>
                </div>
              </div> 
            </div>
          </div>
                  </Slider>
          {/* <div className="main-heading row">
            <div className="col-lg-6 text-center">
              <h3>BRAND RESPONSIBILITY</h3>
              <small>Timeless Fashion for Sustainable Futures </small>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="row Fi-region">
            <div className="col-lg-6 page-text">
              <p>Ox Premium Company fully understands and recognizes the importance of sustainability and the
                ecological impact; therefore, we are very conscious about the sourcing of our raw materials. We
                don’t kill animals just to acquire leather, instead, we use the hide of the zabiha animals only.
                Moreover, our ideology stresses on timeless fashion and our craft determines sustainable futures,
                because we believe fast fashion is crucial for the environment and is unfair to our oceans and
                landfills.</p>
            </div>
            <div className="col-lg-6 page-image">
              <img src={photo11} className="img-fluid" width="400px" height="300px" />
            </div>
          </div> */}
        </div>
        <div>
        {/* <div id='banner' className='box'> */}
        {/* <div class="Bianer">
            <small>LEATHER GOODS AND FOOTWEAR</small>
        </div> */}
       {/* </div> */}
      
        {/* <div class="Bianer2">
            <small>LEATHER GOODS AND FOOTWEAR</small>
        </div> */}
 </div>
      </div>
    )
  }
}
