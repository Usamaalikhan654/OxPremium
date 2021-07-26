import React from "react";
import "./Procurement.css"
import Slider from "react-slick";
import arrownext from "../../Assets/arrow-next.png"
import image from "../../Assets/magic.png"


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
                          <img src={image}  className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" width="210px" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" width="210px" />
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
                          <img src="#" className="img-fluid" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" />
                        </div>
                        <div>
                          <img src="#"className="img-fluid" />
                        </div>
                        <div>
                          <img src="#" className="img-fluid" />
                        </div>

                      </Slider>
              </div>
            </div>
          </div>
                  </Slider>
          </div>        
      );
    }
}
