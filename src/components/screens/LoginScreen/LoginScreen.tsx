import React from "react";
import Guy1 from "../../../img/image 18.png"
import Boltage from "../../../img/fxemoji_bolt.svg"
import FCMBLogo from "../../../img/image 17.png"

import "./style.css";

import Default from "../Default/DefaultPage";

 const LoginScreen = (): JSX.Element => {
  return (
    <div className="login-screen">
     
          
        <Default/>
        
          <div className="frame-5">
            <div className="section-heading">
              <div className="section-title">FCMB Online Account Opening</div>
              <p className="description">
                You can open your FCMB Account from anywhere
                <br />
                in the world. It&#39;s easy, convenient and seamless
              </p>
            </div>
            <div className="frame-6">
              <button className="banking-button personal">Personal Banking</button>
              <button className="banking-button business">Business Banking</button>
            </div>
          </div>
         
          <p className="playa">
            First City Monument Bank Limited. A Member of FCMB Group Plc (Licensed By Central Bank of Nigeria)
          </p>
        </div>
       
     
  );
};

export default LoginScreen
