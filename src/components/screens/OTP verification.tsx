import React, { useState, useEffect } from "react";
import Lady1 from "../../assets/Lady with Phone 1.png";
import Bolt from "../../img/fxemoji_bolt.svg";
import FCMB from "../../assets/download.png";
import "./OTP.css";
import Frame from "../tools/Frame";
import arrow from "../../img/Buttons.png";
import Buttons from "../tools/Buttons";
import Loader from "../tools/Loader";
import Modal from "../Modals/Modal"; // Import the Modal component
import FaceID from "./Face-ID";
import Man1 from "../../img/image 18.png";


const OTP: React.FC = () => {
  const [dob, setDob] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(41);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const isOtpComplete = otp.every((digit) => digit !== "");
    const isDobFilled = dob !== "";
    setIsButtonActive(isOtpComplete && isDobFilled);
  }, [otp, dob]);

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

  const handleContinueClick = () => {
    if (isButtonActive) {
      setIsConfirmVisible(true);
      console.log("You clicked on the pink circle!");
    }
  };

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
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} />
                <span className="span">y loans with </span>
                <span className="FCMB">FastCash</span>
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
            <div className="frame">
              <div className="text-wrapper">Enter your OTP</div>
              <div className="div">
                <div className="div-2">
                  <p className="you-are-about-to-top">
                    <span className="span">
                      OTP was sent to the phone number  
                    </span>
                    <span className="text-wrapper-2">0803*****90</span>
                    <span className="span">
                      Check and input the details
                    </span>
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
                  <div className="input-wrapper">
                    <div className="text-wrapper-10"style={{marginLeft:"30px"}}>Enter Date of Birth</div>
                    <div className="Input Container" style={{marginRight:"100px"}}>
                    <div className="input" style={{marginTop:"30px", }}>
                      <input
                        type="date"
                        className="date-input"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        placeholder="DD/MM/YYYY"
                      />
                      </div>
                    </div>
                  </div>
                  <div className="div-6" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <img className="img" alt="Buttons" src={arrow} />
                    <Buttons 
                      border="none"
                      color={isButtonActive ? "purple" : "lightgray"} // Update button color based on isButtonActive
                      height="70px"
                      onClick={handleContinueClick} // Update click handler
                      radius="20px"
                      width="350px"
                      children="Continue"
                      disabled={!isButtonActive} // Disable button if form is incomplete
                    />
                  </div>
                </div>
                <div className="group10">
                  <div className="label">
                    <p className="don-t-have-this-try">
                      <span className="text-wrapper">Don’t have this? </span>
                      <span
                        className="span link"
                        onClick={handleFacialRecognitionClick} // Add click event handler
                        style={{ cursor: "pointer", color: "purple", textDecoration: "underline", margin:"0px" }} // Make it look like a link
                      >
                        Try Facial Recognition
                      </span>
                    </p>
                  </div>
                  {isConfirmVisible && (
                    <div className="label-confirm">
                      <div className="login-successful">Confirming your details</div>
                      <Loader />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Modal with FaceID component */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <FaceID />
        </Modal>
      </body>
    </>
  );
};

export default OTP;
