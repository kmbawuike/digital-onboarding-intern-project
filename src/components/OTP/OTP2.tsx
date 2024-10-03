import React, { useState, useEffect } from "react";
import Lady1 from "../../assets/Lady with Phone 1.png";
import Bolt from "../../img/fxemoji_bolt.svg";
import FCMB from "../../assets/download.png";
import "./OTP2.css";
import Frame from "../tools/Frame";
import arrow from "../../img/Buttons.png";
import Buttons from "../tools/Buttons";
import Loader from "../tools/Loader";
import Modal from "../Modals/Modal"; // Import the Modal component
import FaceID from "../screens/Face-ID";
import Man1 from "../../img/image 18.png";

import { Link, useNavigate } from "react-router-dom";

const OTP2: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(41);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // State to manage the active section for the sliding animation
  const [activeSection, setActiveSection] = useState<"section-1" | "man-frame">("section-1");

  // Handle frame click to switch sections
  const handleFrameClick = () => {
    setActiveSection((prevSection) => (prevSection === "section-1" ? "man-frame" : "section-1"));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const isOtpComplete = otp.every((digit) => digit !== "");
    setIsButtonActive(isOtpComplete);
  }, [otp]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value !== "") {
        const nextInput = document.querySelector(`.otp-input-${index + 1}`) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      }
    }
  };

  const navigate = useNavigate();
  const handleContinueClick = () => {
    navigate('/Valid2')
   
  };

const HandleBackButton = () =>{

  navigate('/Form')
}

  const handleFacialRecognitionClick = () => {
    setIsModalOpen(true); // Open the modal
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
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} />
                <span className="span1">y loans with </span>
                <span className="FCMB" style={{fontWeight:"bolder", fontSize:"larger"}}>FastCash</span>
              </p>
            </div>
            <div className="frame-3">
              <Frame />
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
          <section  style={{marginLeft:"71px"}} >
            <div className="otp-frame">
              <div className="text-wrapper" style={{ marginRight: "0px" }}>
                Enter your OTP
              </div>
              <div className="div">
                <div className="div-2">
                  <p className="you-are-about-to-top">
                    <div className="Big">
                      <span className="span">OTP was sent to the phone number</span>
                      <span className="text-wrapper-2"  style={{ color: "purple", marginLeft: "232px", marginTop:"-17px" }}>0803*****90</span>
                    </div>
                    <span className="span">Check and input the details</span>
                  </p>
                  <div className="otp-container">
                    <input
                      type="text"
                      maxLength={1}
                      className="otp-input otp-input-0"
                      value={otp[0]}
                      onChange={(e) => handleOtpChange(e, 0)}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className="otp-input otp-input-1"
                      value={otp[1]}
                      onChange={(e) => handleOtpChange(e, 1)}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className="otp-input otp-input-2"
                      value={otp[2]}
                      onChange={(e) => handleOtpChange(e, 2)}
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className="otp-input otp-input-3"
                      value={otp[3]}
                      onChange={(e) => handleOtpChange(e, 3)}
                    />
                  </div>
                  <div className="div-3">
                    <p className="code-expires-in">
                      <span className="text-wrapper-6">Code expires in : </span>
                      <span className="text-wrapper-7">
                        {formatTime(timeLeft)}
                      </span>
                    </p>
                    <div className="text-wrapper-8">Resend OTP</div>
                  </div>
                </div>
                <div className="div-4">
                  <div
                    className="div-6"
                    style={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <img className="img" alt="Buttons" src={arrow} onClick={HandleBackButton} />
                    <Buttons
                      border="none"
                      color={isButtonActive ? "purple" : "lightgray"}
                      height="70px"
                      onClick={handleContinueClick}
                      radius="20px"
                      width="350px"
                      children="Continue"
                      disabled={!isButtonActive}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

       
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <FaceID />
        </Modal>
      </div>
    </>
  );
};

export default OTP2;
