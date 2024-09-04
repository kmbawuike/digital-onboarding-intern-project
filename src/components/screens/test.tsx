import React, { useState } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../img/fxemoji_bolt.svg";
import "./Validation.css";
import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";
import Buttons from "../tools/Buttons";
import Modal from "../Modals/Modal"; // Import the Modal component
import FaceID from "./Face-ID";
import Arrow from "../../img/Buttons.png";

const Testing = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen state

  const handleFacialRecognitionClick = () => {
    setIsModalOpen(true); // Open the modal
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
                <img
                  className="fxemoji-bolt"
                  alt="Fxemoji bolt"
                  src={Bolt}
                  style={{ left: "115px" }}
                />
                <span className="span">y loans with </span>
                <span className="FCMB">FastCash</span>
              </p>
            </div>
            <div className="div">
              <Frame />
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
            <h1>Validate Identity</h1>
            <br />
            <div className="protect-account">
              <p>
                In order to protect your account, please enter the 11-digit
                <span
                  className="phone-number"
                  style={{ color: "purple", marginLeft: "120px" }}
                >
                  {" "}
                  0803*****90
                </span>
                linked to your BVN
              </p>
            </div>
            <br />
            <p className="bvn-text">Phone number</p>
            <input type="number" placeholder="Enter your phone number" />
            <br />
            <span>
              <img
                src={Arrow}
                style={{ height: 50, marginTop: 40, marginLeft: -40 }}
                alt="Arrow"
              />
              <button className="continue">Next</button>
            </span>
            <br />
            <p className="already" style={{ marginRight: "0px", padding: 0 }}>
              <span>Don't have this</span>{" "}
              <span
                className="login"
                style={{
                  color: "purple",
                  cursor: "pointer",
                  marginLeft: "140px",
                  marginTop: "-17px",
                }}
                onClick={handleFacialRecognitionClick} // Trigger facial recognition modal
              >
                Try Facial Recognition
              </span>
            </p>
          </section>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <FaceID />
        </Modal>
      </body>
    </>
  );
};

export default Testing;
