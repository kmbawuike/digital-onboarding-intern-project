import React, { useState, useEffect } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../img/fxemoji_bolt.svg";
import "./TermsValidation.css";
import { Link, useNavigate } from "react-router-dom";
import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";
import Buttons from "../tools/Buttons";
import Stargazing from "../../img/Frame 12324.png";
import Modal from "../Modals/T&CModal"; // import the Modal component
import "../screens/Default/Stargazing.css";
import Profile from "../Pre-Profile/Pre-Profile";
import Terms from "../screens/T&C";

const Validation3 = (): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Use useEffect to open the modal when the component mounts
  useEffect(() => {
    setModalOpen(true);
  }, []);

  const closeModal = () => setModalOpen(false);

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
            <div className="div" style={{marginLeft:"270px"}}>
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
          <section>
            <div className="TC-frame">
              <div className="second-text-wrapper">Validation Successful</div>
              <img className="stars" alt="Group" src={Stargazing} />
              <div className="button-wrapper" style={{marginLeft:"78px"}}>
              <Buttons
                border="none"
                color=""
                height="70px"
                radius="20px"
                width="350px"
                children="Continue"
                onClick={console.log}
                disabled={false}
              />
              </div>
            </div>
          </section>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Terms/> {/* Display the Profile component inside the modal */}
        </Modal>
      </body>
    </>
  );
};

export default Validation3;
