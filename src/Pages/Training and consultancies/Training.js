import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from "../../Assets/web opt 2-30 1.png"
import "./Training.css"

 function Training () {
      return (
        <div className="contain-1">
          <div className="container">
            <div className="main-heading row">
              <div className="col-lg-6 text-center">
                <h3>TRAINING &amp; CONSULTANCIES</h3>
                <small>Equipping for The Best </small>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="row Fi-region">
              <div className="col-lg-6 page-text">
                <p>Safety is the core concern of all the responsible organizations and institutions and we understand the lack of available trainings and facilitation for it. This requirement made us work on a full-scale safety trainings and <br/><br/> consultancies so that we furnish your need and resolve it fully with our local and cultural knowledge and limitations. 
                   Whether it is about the safety of your staff, your equipment or the services you deliver, we have a highly skilled squad of trainers who not only develop a customized training and workshop for your staff’s safety but also design manual to keep your equipment and processes safe. We also offer safety consultancies to our clients to help them equip in handling the challenges they face. </p>
              </div>
              <div className="col-lg-6 page-image">
                <img src={photo1} className="img-fluid" width="400px" height="300px" />
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Training;