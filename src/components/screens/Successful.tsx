import React, { useState, useRef, useEffect } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../assets/fxemoji_bolt.png";
import "./Default/Default.css";
import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";
import "./Default/Form.css";
import Buttons from "../tools/Buttons";
import arrow from "../../img/Buttons.png";
import Box from "../tools/Elipse"; // Assuming Box is the component representing the ellipse
import Man1 from "../../../img/image 18.png";
import "./Default/Man-Frame.css";
import "./Default/Referral.css"
const Default = (): JSX.Element => {
  // State variables to hold form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signature, setSignature] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // State to handle button activation
  const [isButtonActive, setIsButtonActive] = useState(false);

  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // State to manage the active section for the sliding animation
  const [activeSection, setActiveSection] = useState<"section-1" | "man-frame">("section-1");

  // Handle file upload and preview
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setUploadedImage(imageUrl);
    }
  };

  // Trigger file input click on Box click
  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Check if all required fields are filled
  useEffect(() => {
    const allFieldsFilled =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      signature.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "";

    setIsButtonActive(allFieldsFilled);
  }, [firstName, lastName, signature, email, phoneNumber]);

  // Handle frame click to switch sections
  const handleFrameClick = () => {
    setActiveSection((prevSection) => (prevSection === "section-1" ? "man-frame" : "section-1"));
  };

  return (
    <>
      <body className="body">
        <div className={`section-1 ${activeSection === "section-1" ? "active" : "hidden"}`}>
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
              <Frame onClick={handleFrameClick} />
            </div>
          </section>
        </div>

        <div className={`man-frame ${activeSection === "man-frame" ? "active" : "hidden"}`}>
          {/* <div className="overlap"> */}
            <img className="img-lady" alt="Mask group" src={Lady1} />
            <div className="group">
              <div className="overlap-group-2">
                <p className="everything-is-ea-y">
                  <span className="text-wrapper">Everything is Ea&nbsp;&nbsp;y with</span>
                  <span className="span">&nbsp;</span>
                  <span className="text-wrapper-2">FCMB</span>
                </p>
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} />
              </div>
            </div>
          {/* </div> */}
          <div className="div">
            <Frame onClick={handleFrameClick} />
          </div>
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
          <div className='main-container'>
      <span className='account-created-successfully'>
        Account Created Sucessfully
       
      </span>
      <div className='group'>
       
      </div>
     
      <div className='frame-2'>
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
      <div className='frame-4'>
        <span className='successfully'>
          Download the FCMB mobile app to enjoy seemless onboarding experience
        </span>
        <div className='badges'>
          <div className='download-badge-google-play'>
           
          </div>
          <div className='download-badge-app-store'>
            
          </div>
        </div>
      </div>
    </div>
          </section>
        </div>
      </body>
    </>
  );
};

export default Default;
