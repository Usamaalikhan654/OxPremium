import React from "react";
import "./Procurement.css"
import Slider from "react-slick";
import arrownext from "../../Assets/arrow-next.png"
import Smimage from "../../Assets/p-01.png"
import Lgimage from "../../Assets/p-21.png"
import Smimage1 from "../../Assets/p-05.png"
import Lgimage1 from "../../Assets/p-25.png"
import Smimage2 from "../../Assets/p-03.png"
import Lgimage2 from "../../Assets/p-23.png"
import Smimage3 from "../../Assets/p-06.png"
import Lgimage3 from "../../Assets/p-26.png"
import Smimage4 from "../../Assets/p-07.png"
import Lgimage4 from "../../Assets/p-27.png"
import Smimage5 from "../../Assets/p-04.png"
import Lgimage5 from "../../Assets/p-24.png"
import { Link } from "react-router-dom";

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
    render () {
      return (
        <div className="container-bg">
          <div className="container">
            <div className="main-heading row">
              <div className="col-lg-6 text-center">
                <h3>PROCUREMENT SERVICES</h3>
                <small>Shouldering Your Responsibilities </small>
              </div>
            </div>
            <hr className="hr-line" />
            <Slider>
          <div className="row Fi-region">
            <div className="col-lg-6 page-text">
                    <div className="left-slider">
                      <p>Ox Premium Company is particularly proud of its timeless shoe collection, designed and available in
                        all types of leather and texture including, milled grain, nubuck, suede, patent and others – crafted
                        in classic as well as boho styles poised to win gazes.</p>
                      <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                       <div>
                          <img src={Smimage}  className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smimage1}  className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smimage2} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smimage3} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smimage4} className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src={Smimage5} className="img-fluid" width="210px" />
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
                          <img src={Lgimage3} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgimage4 }  className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgimage5}  className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgimage}  className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgimage1} className="img-fluid" />
                        </div>
                        <div>
                          <img src={Lgimage2}  className="img-fluid" />
                        </div>

                      </Slider>
              </div>
              <div className='row p-0 m-0 position-relative'>
                <div className='col-12 text-center'>
                <Link to="/Procured" class="view-all-css" href="#" role="button">VIEW ALL</Link>
                </div>
              </div> 
            </div>
          </div>
                  </Slider>
          </div> 
          </div>       
      );
    }
}
