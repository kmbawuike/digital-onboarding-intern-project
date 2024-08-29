import React from "react";
import Guy1 from "../../../img/image 18.png"
import Boltage from "../../../img/fxemoji_bolt.svg"
import FCMBLogo from "../../../img/image 17.png"
import "./style.css";
import { useNavigate } from "react-router-dom";
import Default from "../Default/DefaultPage";



 const Welcome = (): JSX.Element => {
 
  return (
    <div className="welcome-screen">
     <Default/>
        <div className="frame-5">
          <div className="Info">
            <div className="section-heading">
              <div className="section-title">FCMB Online Account Opening</div>
              <div className="section-title-2">Welcome!!!</div>
              <p className="description">
                <span className="text-wrapper-4">
                  WHAT DO I NEED TO OPEN AN ACCOUNT?
                  <br />
                </span>
                <span className="text-wrapper-5">
                  Scanned copy of passport photograph
                  <br />
                  Scanned copy of signature
                  <br />
                  <br />
                  If opening an account for a minor (0 - 15 years), a scanned copy of childs birth certificate and
                  passport
                  <br />
                  photograph will be required.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-4">
                  ACCOUNT FEATURES
                  <br />
                </span>
                <span className="text-wrapper-5">
                  • Zero minimum operating balance
                  <br />• Attractive and highly competitive interest rate
                  <br />• Free access to secure mobile and internet banking
                  <br />• Debit card that can be used anywhere around the world
                </span>
              </p>
              
            </div>
            <div className="frame-6">
              <button className="banking-button">Get Started</button>
           
            </div>
          </div>
          
          </div>
          
          
        </div>
     
  );
};

export default Welcome
