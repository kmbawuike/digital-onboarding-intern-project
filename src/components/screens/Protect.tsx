import React, { useState } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../img/fxemoji_bolt.svg";
import './Default/Protect.css'
import { useNavigate } from "react-router-dom";
import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";
import Buttons from "../tools/Buttons";
import Stargazing from "../../img/Frame 12324.png";
import NINentry from "./EnterNIN";
import Modal from "../Modals/FaceIDModal"; // import the Modal component
import "./Default/Stargazing.css";

import "./OTP.css";

import arrow from "../../img/Buttons.png";

import Loader from "../tools/Loader";

import FaceID from "./Face-ID";
import Man1 from "../../img/image 18.png";
import DateTimePicker from "../Datepicker";
 


const Protect = (): JSX.Element => {

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
 
  const handleFacialRecognitionClick = () => {
    setIsModalOpen(true); // Open the modal
  };

 const navigate = useNavigate();
  
  const handleGetStartedClick = () => {
    navigate('/OTP');
  };

  const NavtoBack =useNavigate();

  const HandleBackButton = () =>{
    NavtoBack('./BVN');
  }

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
          <section style={{width:"400px", height:"472px"}}>
            <h1>Validate Identity</h1>
            <br />
            <div className="protect-account">
              <p>
                In order to protect your account, please enter the 11-digit
                phone number 0803*****90 linked to your BVN
              </p>
            </div>
            <br />
            <div className="input-wrapper">
            <p className="bvn-text" style={{textAlign:"left"}}>Phone number</p>
            <input
              type="number"
              placeholder="Enter your phone number"
              style={{width:"374px", height:"44px", borderRadius:"10px"}}
            />
            </div>
            <br />
            <div className="div-6" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <img className="img" alt="Buttons" src={arrow} onClick={HandleBackButton} />
                    <Buttons
                      border="none"
                      color={ "purple"} // Update button color based on isButtonActive
                      height="70px"
                      onClick={handleGetStartedClick} // Update click handler
                      radius="20px"
                      width="350px"
                      children="Continue"
                      disabled={false} // Disable button if form is incomplete
                    />
                  </div>
                  <div className="label">
                    <p className="don-t-have-this-try">
                      <span className="text-wrapper">Don’t have this? </span>
                      <span
                        className="span link"
                        onClick={handleFacialRecognitionClick} // Add click event handler
                        style={{ cursor: "pointer", color: "purple", textDecoration: "underline", margin: "0px" }} // Make it look like a link
                      >
                        Try Facial Recognition
                      </span>
                    </p>
                  </div>
          </section>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <FaceID />
        </Modal>
       
      </body>
    </>
  );
};

export default Protect;
