import React, { useState } from "react";
import Lady1 from "../../assets/Lady with Phone 1.png";
import Bolt from "../../assets/fxemoji_bolt.png";
import FCMB from "../../assets/download.png"
import "./BVN.css";
import Frame from "../tools/Frame";
import { useNavigate } from "react-router-dom";

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
      <body className="body">
        <div className="section-1">
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span">Ea</span> <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} /><span className="span">y loans with </span><span className="FCMB">FastCash</span>
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
              <img src={FCMB} className="logo" style={{ width: 50 }} alt="Logo" />
            </span>
          </header>
          <br />
          <section>
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
            <p className="already">
              Already have an account yet? <span className="login" style={{marginLeft:"270px", marginTop:"-18px"}}>Login</span>
            </p>
          </section>
        </div>
      </body>
    </>
  );
};

export default BVN;
