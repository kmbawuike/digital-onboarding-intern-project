import React from 'react';
import './Description.css';

const Desc: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='frame-1'>
        <div className='frame-2'>
          <span className='select-description'>
            Select one that best describes you
          </span>
          <div className='frame-3'>
            <div className='frame-4'>
              <input className='frame-input' type='text' />
              <span className='fcmb-account'>I have an FCMB Account</span>
              <div className='radio-button' />
            </div>
            <button className='frame-5'>
              <span className='dont-have-account'>
                I don’t have an FCMB Account
              </span>
              <div className='group'>
                <div className='checkmark'>
                  <div className='xmlid' />
                </div>
                <div className='oval-copy' />
              </div>
            </button>
          </div>
        </div>
        <button className='button'>
          <span className='get-started'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Desc;
