import React, { useState } from "react";
import Buttons from "../tools/Buttons";
import FaceIdScreen from "../tools/faceid";
import "../screens/Default/Face-ID.css";

const FaceID = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) return <></>; // Return an empty fragment instead of null

  return (
    <div className="face-id-frame">
      <div className="div">
        <div className="text-wrapper">Facial Recognition</div>
        <p className="n">
          Get a clear background
          <br />
          Steady your camera
        </p>
        <div className="group">
          <div className="face-id">
            <FaceIdScreen />
          </div>
        </div>
        <div className="div-2" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button 
            className="face-id-div-wrapper" 
            style={{ borderRadius: "50px", width: "122.5px" }}
            onClick={handleCancelClick} // Close modal on click
          >
            Cancel
          </button>
          <Buttons
            border="none"
            color="#60088C" // Button color
            height="70px"
            onClick={() => console.log("Continue clicked")} // Button click handler
            radius="20px"
            width="122.5px"
            children="Continue"
            disabled={false} // Disable button if form is incomplete
          />
        </div>
      </div>
    </div>
  );
};

export default FaceID;
