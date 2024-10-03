import React, { useState } from "react";
import Lady1 from "../../assets/Lady with Phone 1.png";
import Bolt from "../../assets/fxemoji_bolt.png";
import FCMB from "../../assets/download.png"
import "./BVN.css";
import Frame from "../tools/Frame";
import { Link, useNavigate } from "react-router-dom";

const BVN: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"BVN" | "NIN">("BVN");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleGetStartedClick = () => {
    navigate('/Protect');
  };

  return (
    <>
      <div className="body">
        <div className="section-1">
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span1">Ea</span> <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} /><span className="span1">y loans with </span><span className="FCMB" style={{fontWeight:"bolder", fontSize:"larger"}}>FastCash</span>
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
              <img src={FCMB} className="logo" style={{ width: 50 }} alt="Logo" />
            </span>
          </header>
          <br />
          <section  style={{marginLeft:"91px"}}>
            <h1>Open a new Account</h1>
            <br />
            <span className="toggle">
              <button
                className={`bvn ${selectedOption === "BVN" ? "active" : ""}`}
                onClick={() => setSelectedOption("BVN")}
              >
                BVN
              </button>
              <button
                className={`large ${selectedOption === "NIN" ? "active" : ""}`}
                onClick={() => setSelectedOption("NIN")}
              >
                NIN
              </button>
            </span>
            <br />
            {selectedOption === "BVN" ? (
              <>
                <p className="bvn-text">BVN</p>
                <input
                  type="number"
                  placeholder="Enter your BVN"
                  className="BVN_NIN"
                  onChange={handleInputChange}
                  value={inputValue}
                />
              </>
            ) : (
              <>
                <p className="nin-text">NIN</p>
                <input
                  type="number"
                  placeholder="Enter your NIN"
                  className="BVN_NIN"
                  onChange={handleInputChange}
                  value={inputValue}
                />
              </>
            )}
            <button
              className="continue"
              onClick={handleGetStartedClick}
              disabled={!inputValue}
              style={{
                backgroundColor: inputValue ? "purple" : "lightgrey",
                cursor: inputValue ? "pointer" : "not-allowed",
              }}
            >
              Continue
            </button>
            <br />
            <p className="already" style={{marginRight:"87px"}}>
              Already have an account yet? <span className="login" style={{marginLeft:"277px", marginTop:"-18px"}}>Login</span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default BVN;
