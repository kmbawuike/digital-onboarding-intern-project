import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/Valid3');
  };

  return (
    <div className='main-container'>
      <div className='frame-1'>
        <span className='channel-description'>
          For your seamless omni-channel experience, the below channels are
          being pre-profiled for you.
        </span>
        <div className='frame-II'>
          <div className='frame-III'>
            <span className='ussd'>USSD</span>
            <div className='frame-IV'>
              <div className='mingcute-checkbox-fill'>
                <div className='group-IV' />
              </div>
            </div>
          </div>
          <div className='frame-V'>
            <span className='chatbot'>Chatbot</span>
            <div className='frame-VI'>
              <div className='mingcute-checkbox-fill-7'>
                <div className='group-VIII' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='buttonsI'>
        <span className='get-it' onClick={handleGetStartedClick}>Continue</span>
      </button>
    </div>
  );
};

export default Profile;
