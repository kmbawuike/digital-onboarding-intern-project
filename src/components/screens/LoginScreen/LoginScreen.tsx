import React from "react";
import Guy1 from "../../../img/image 18.png"
import Boltage from "../../../img/fxemoji_bolt.svg"
import FCMBLogo from "../../../img/image 17.png"

import "./style.css";
import { Button } from "@chakra-ui/react";

 const LoginScreen = (): JSX.Element => {
  return (
    <div className="login-screen">
      <div className="overlap-3">
        <div className="frame">
          <div className="frame-2">
            <div className="overlap-4">
              <img className="mask-group" alt="Mask group" src={Guy1} />
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <p className="everything-is-ea-y">
                    <span className="span">Everything is Ea</span>  <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Boltage} /><span className="span">y with </span><span className="FCMB">FCMB</span>
                   
                  
                  </p>
                 
                </div>
              </div>
            </div>
            {/* <div className="frame-3">
              <div className="rectangle-9" />
              <img className="icons" alt="Icons" src="/img/icons.svg" />
            </div> */}
          </div>
        </div>
        <div className="frame-4">
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
          <img className="image" alt="Image" src={FCMBLogo} />
          <div className="go-back-home"> Go back home</div>
          <p className="p">
            First City Monument Bank Limited. A Member of FCMB Group Plc (Licensed By Central Bank of Nigeria)
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default LoginScreen
