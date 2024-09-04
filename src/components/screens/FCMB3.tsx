import React from 'react';
import './Default/Form.css'; // Ensure that the correct path to your CSS file is used
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../assets/fxemoji_bolt.png";


import FCMB from "../../img/image 17.png";
const Num: React.FC = () => {
  return (
    <>
      <div className="body">
        <div className="section-1">
          <img
            src={Lady1}
            className="img-lady"
            alt="Lady with Phone"
          />
          <section>
            <h1>
              Ea
              <img
                src={Bolt}
                className="bolt"
                style={{ width: 30 }}
                alt="Bolt"
              />
              y fast loans
            </h1>
            <br />
            <p>
              <b>Fast Cash </b>
            </p>
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
                phone number 0803*****90 linked to your BVN
              </p>
            </div>
            <br />
            <p className="bvn-text">Phone number</p>
            <input
              type="number"
              placeholder="Enter your phone number"
            />
            <br />
            <span>
              <img
                src="src/assets/purple_arrow.jpg"
                style={{ height: 50, marginTop: 40, marginLeft: -40 }}
                alt="Arrow"
              />
              <button className="continue">Next</button>
            </span>
            <br />
            <p className="already">
              Don't have this <span className="login">Try Facial Recognition</span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Num;
