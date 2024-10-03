import React, { useState, useRef, useEffect } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../assets/fxemoji_bolt.png";

import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";

import "./Default/Referral.css"
import { Link } from "react-router-dom";
const Done = (): JSX.Element => {
  

  return (
    <>
      <div className="body">
        <div className="section-1">
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span1">Ea</span>{" "}
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} />
                <span className="span1">y loans with </span>
                <span className="FCMB"  style={{fontWeight:"bolder", fontSize:"larger"}}>FastCash</span>
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
          <section>
          <div className='main-container'>
      <span className='account-created-successfully'>
        Account Created Sucessfully
       
      </span>
      <div className='successful-group'>
       
      </div>
     
      <div className='successful-frame-2'>
        <div className='youve-successfully'>
          <span className='you-have-successfully-opened-an-account-with-fcmb'>
            You have sucessfully opened an account with FCMB. Your account number is
          </span>
          <span className='text-3'>3546626276</span>
        </div>
        <div className='youve-successfully-3'>
          <span className='your-referral-code-is'>
            Your referral code is
          </span>
          <span className='bevkt'>BEV9KT</span>
          <span className='refer-your-friends'>
            Refer your friends and family with the code and get rewarded
          </span>
        </div>
      </div>
      <div className='successful-frame-4'>
        <span className='successfully'>
          Download the FCMB mobile app to enjoy seemless onboarding experience
        </span>
        <div className='successful-badges'>
          <div className='download-badge-google-play'>
           
          </div>
          <div className='download-badge-app-store'>
            
          </div>
        </div>
      </div>
    </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Done;
