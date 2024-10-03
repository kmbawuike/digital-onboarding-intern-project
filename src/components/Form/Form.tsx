import React, { useState, useRef, useEffect } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../assets/fxemoji_bolt.png";
// import "../screens/Default/OTP.css";
import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";
import "./Form.css";
import Buttons from "../tools/Buttons";
import arrow from "../../img/Buttons.png";
import Box from "../tools/Elipse"; // Assuming Box is the component representing the ellipse
import Man1 from "../../img/image 18.png";

import { Link, useNavigate } from "react-router-dom";


const Form = (): JSX.Element => {
  // State variables to hold form input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signature, setSignature] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const navigate = useNavigate();

  const HandleOTP2Click =()=>{
    navigate('/OTP2');
  }
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

 
  const HandleBackButton = () =>{
    navigate('/NIN')
  }
  return (
    <>
      <div className="body">
        <div className={`section-1 ${activeSection === "section-1" ? "active" : "hidden"}`}>
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span1">Ea</span>{" "}
                <img className="fxemoji-bolt-form" alt="Fxemoji bolt" src={Bolt} />
                <span className="span1">y loans with </span>
                <span className="FCMB" style={{fontWeight:"bolder", fontSize:"larger"}}>FastCash</span>
              </p>
            </div>
            <div className="frame-3">
              <Frame  />
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
          <section  style={{marginLeft:"71px"}}>
            <div className="form-frame">
              <div className="text-wrapper">Profile Details</div>
              <div className="div">
                <div className="ellipse" style={{ position: "relative" }}>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  {/* Clickable Box for uploading image */}
                  <div onClick={handleBoxClick} style={{ cursor: "pointer" }}>
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <Box />
                    )}
                  </div>
                </div>
                <div className="form-div-2">
                  <div className="input-wrapper">
                    <div className="fom-input">
                      <div className="overlap-group">
                        <input
                          type="text"
                          className="form-input"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          required
                          style={{top:"24px"}}
                        />
                      </div>
                      <div className="text-wrapper-3">First Name</div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="fom-input">
                      <div className="overlap-group">
                        <input
                          type="text"
                          className="form-input"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last Name"
                          required
                          style={{top:"24px"}}
                        />
                      </div>
                      <div className="text-wrapper-3">Last Name</div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="fom-input">
                      <div className="overlap-group">
                        <input
                          type="text"
                          className="form-input"
                          value={signature}
                          onChange={(e) => setSignature(e.target.value)}
                          placeholder="Signature"
                          required
                          style={{top:"24px"}}
                        />
                      </div>
                      <div className="text-wrapper-3">Signature</div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="fom-input">
                      <div className="div-wrapper">
                        <input
                          type="email"
                          className="form-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                          
                        />
                      </div>
                      <div className="text-wrapper-3">Email</div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="fom-input">
                      <div className="div-wrapper">
                        <input
                          type="tel"
                          className="form-input"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Phone Number"
                          required
                          // 
                        />
                      </div>
                      <div className="text-wrapper-3">Phone Number</div>
                    </div>
                  </div>
                  <div
                    className="div-3"
                    style={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <img className="img" alt="Buttons" src={arrow} onClick={HandleBackButton} />
                    <Buttons
                      border="none"
                      color={isButtonActive ? "#60088C" : "lightgray"} // Button color based on isButtonActive state
                      height="70px"
                      onClick={HandleOTP2Click} // Button click handler
                      radius="20px"
                      width="320px"
                      children="Continue"
                      disabled={!isButtonActive} // Disable button if form is incomplete
                    />
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

export default Form;
