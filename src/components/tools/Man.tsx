import React from "react";
import "./fcmb4.css"
import Man from "../../img/image 18.png"

const FCMB4: React.FC = () => {
  return (
    <>
      
      <div className="body">
        <div className="section-1">
          <img src={Man} className="img-lady" alt="Lady" />
          <section>
            <h1>
              Everything is<br /> Easy with
            </h1>
            <br />
            <p>FCMB</p>
          </section>
        </div>
        <div className="section-2">
          <header>
            <span>
              <p>Go back home</p>
              <img
                src="src/assets/download.png"
                className="logo"
                style={{ width: 50 }}
                alt="FCMB Logo"
              />
            </span>
          </header>
          <br />
          <section>
            <h1>Open a new Account</h1>
            <br />
            <span className="toggle">
              <button className="bvn">BVN</button>
              <button className="nin">NIN</button>
            </span>
            <br />
            <p className="bvn-text">BVN</p>
            <input type="number" placeholder="Enter your BVN" />
            <button className="continue">Continue</button>
            <br />
            <p className="already">
              Already have an account yet? <span className="login">Login</span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default FCMB4;
