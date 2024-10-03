import React from "react";
import { useNavigate } from "react-router-dom";
import Lady1 from "../../../img/Lady with Phone 1.png";
import Bolt from "../../../assets/fxemoji_bolt.png";

import Frame from "../../tools/Frame";
import FCMB from "../../../img/image 17.png";
import "./style.css";

const Welcome = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/Login');
  };

  return (
    <>
      <div className="body">
        <div className="section-1">
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span1">Ea</span>{" "}
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} style={{left:"79px;"}} />
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
              <p>Go back home </p>
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
            <div className="frame-5">
              <div className="Info">
                <div className="section-heading">
                  <div className="section-title">FCMB Online Account Opening</div>
                  <div className="section-title-2" style={{marginLeft:"20px"}}>Welcome!!!</div>
                  <p
                    className="description"
                    style={{
                      textAlign: "left",
                      margin: "0 20px", // Adjust margins as needed
                      lineHeight: "1.5",
                    }}
                  >
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
                      If opening an account for a minor (0 - 15 years), a scanned copy of child's birth certificate and
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
                  <button className="lmao" onClick={handleGetStartedClick} style={{marginLeft:"161px"}}>Get Started</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Welcome;
  