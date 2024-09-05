import React from 'react';
import './T&C.css';
import Buttons from "../tools/Buttons"

const Terms: React.FC = () => {
  return (
    <div className='main-container'>
      <span className='refer-and-earn'>Refer and Earn</span>
      <div className='frame-1'>
        <div className='group'>
          <span className='hint-text'>Referral</span>
          <div className='form-input-icon'>
            <div className='form-input-text'>
              <div className='rectangle-copy' />
              <div className='icons' />
            
            </div>
            <input className='input-field' 
            placeholder='Enter Referral Code' />
          </div>
        </div>
        <div className='frame-3'>
          <div className='radio-button'>
            <input type="checkbox" className="custom-checkbox" />
          </div>
          <div className='my-numbers'>
            <span className='i-accept-the'>I accept the </span>
            <a href='#' className='terms-and-conditions'>terms and conditions</a>
          </div>
        </div>
        <Buttons
                border="none"
                color=""
                height="70px"
                onClick={console.log} // Open modal on click
                radius="20px"
                width="433px"
                children="Continue"
                disabled={false}
              />
      </div>
    </div>
  );
}

export default Terms;
