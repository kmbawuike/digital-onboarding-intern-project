import React, { useState, useRef, useEffect } from "react";
import Lady1 from "../../../img/Lady with Phone 1.png";
import Bolt from "../../../assets/fxemoji_bolt.png";

import Frame from "../../tools/Frame";
import FCMB from "../../../img/image 17.png";


import "./style.css"
import { Link, useNavigate } from "react-router-dom";
const LoginScreen = (): JSX.Element => {
  const navigate = useNavigate();

;
 
 const handleGetStartedClick = () => {
   navigate('/BVN');
 };
  return (
    <>
      <div className="body">
        <div className= "section-1" >
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span1" style={{marginRight:"5px"}}>Ea</span>{" "}
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} />
                <span className="span1">y loans with </span>
               
                <span className="FCMB" style={{fontWeight:"bolder", fontSize:"larger"}}>FastCash</span>
              </p>
            </div>
            <div className="frame-3">
              <Frame/>
            </div>
          </section>
        </div>

     

        <div className="section-2">
          <header>
            <span>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <p>Go back home</p>
              </Link>
              <img
                src={FCMB}
                className="logo"
                style={{ width: 50 }}
                alt="Logo"
              />
            </span>
          </header>
          <br />
          <section  style={{marginLeft:"101px"}}>
          
    

          <div className="frame-5">
            <div className="section-heading">
              <div className="section-title">FCMB Online Account Opening</div>
              <p className="description" style={{marginLeft:"-38px"}}>
                You can open your FCMB Account from anywhere
                <br />
                in the world. It&#39;s easy, convenient and seamless
              </p>
            </div>
            <div className="frame-6">
              <button className="banking-button personal"  onClick={handleGetStartedClick}>Personal Banking</button>
              <button className="banking-button business">Business Banking</button>
            </div>
          </div>
          <p className="playa">
            First City Monument Bank Limited. A Member of FCMB Group Plc (Licensed By Central Bank of Nigeria)
          </p>
          
       
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;


