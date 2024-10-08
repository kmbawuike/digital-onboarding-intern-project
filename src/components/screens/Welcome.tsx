import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../assets/fxemoji_bolt.png";

import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";

import "../screens/Default/Man-Frame.css";
import "../screens/WelcomeScreen/style.css";
import Modal from "../Modals/DescModal";
import Desc from "./Description";

const Welcome = (): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  const handleGetStartedClick = () => {
    navigate('/Login');
  };

  return (
    <>
      <body className="body">
        <div className="section-1">
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span">Ea</span>{" "}
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} />
                <span className="span">y loans with </span>
                <span className="FCMB">FastCash</span>
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
                  <button className="lmao" onClick={handleGetStartedClick}>Get Started</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
};

export default Welcome;
