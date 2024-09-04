import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='frame-1'>
        <span className='channel-description'>
          For your seamless omni-channel experience, the below channels are
          being pre-profiled for you.
        </span>
        <div className='frame-2'>
          <div className='frame-3'>
            <span className='ussd'>USSD</span>
            <div className='frame-4'>
              <div className='mingcute-checkbox-fill'>
                <div className='group-4' />
              </div>
            </div>
          </div>
          <div className='frame-5'>
            <span className='chatbot'>Chatbot</span>
            <div className='frame-6'>
              <div className='mingcute-checkbox-fill-7'>
                <div className='group-8' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='buttons'>
        <span className='get-started'>Continue</span>
      </button>
    </div>
  );
};

export default Profile;
