import React, { useState } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../img/fxemoji_bolt.svg";
import "./Validation.css";
import { Link, useNavigate } from "react-router-dom";
import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";
import Buttons from "../tools/Buttons";
import Stargazing from "../../img/Frame 12324.png";
import NINentry from "../EnterNIN/EnterNIN";
import Modal from "../Modals/NINModal"; // import the Modal component
import "../screens/Default/Stargazing.css";

const Validation = (): JSX.Element => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="body">
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
          <section className="success">
            <div className="frame1">
              <div className="first-text-wrapper">Validation Successful</div>
              <img className="group1" alt="Group" src={Stargazing} />
              <div 
                className="Button-wrapper"
                style={{
                  display: "flex",
                  justifyContent: "center",  // Center the button horizontally
                  marginTop: "20px"
                }}
              >
                <div className="button-wrapper">
                <Buttons
                  border="none"
                  color="purple"
                  height="70px"
                  onClick={openModal} // Open modal on click
                  radius="20px"
                  width="350px"
                  children="Continue"
                  disabled={false}
                />
                </div>
              </div>
            </div>
          </section>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <NINentry /> {/* Display the NIN entry form inside the modal */}
        </Modal>
      </div>
    </>
  );
};

export default Validation;
