import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './EnterNIN.css';

const NINentry: React.FC = () => {
  const [nin, setNin] = useState(''); // State to hold the NIN input

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNin(event.target.value); // Update state when input changes
  };

  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/NIN');
  };


  return (
    <div className="main-container">
      <div className="frame-1">
        <span className="enter-your-nin">Enter your NIN</span>
        <div className="frame-2">
          <div className="frame-3">
            <div className="nin-input">
              <span className="nin">NIN</span>
              <div className="rectangle2">
                <input
                  type="text"
                  className="input-field"
                  value={nin}
                  onChange={handleInputChange}
                  placeholder="Enter your NIN"
                />
              </div>
              <span className="enter-your-nin-4">Enter your NIN</span>
            </div>
          </div>
          <div className="skip-frame-5">
            <button className="skip-buttons">
              <span className="skip">Skip</span>
            </button>
            <button
              className="skip-buttons-6"
              style={{
                backgroundColor: nin ? 'rgb(141,23,143)' : 'rgb(236,219,238)', // Color changes based on input
                cursor: nin ? 'pointer' : 'not-allowed', // Change cursor style based on input
              }}
              disabled={!nin}
              onClick={handleGetStartedClick}
              // Disable button if input is empty
            >
              <span className="proceed-get-started">Proceed</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NINentry;
