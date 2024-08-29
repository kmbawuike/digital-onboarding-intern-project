import React, { ReactNode } from "react";
import Guy1 from "../../../img/image 18.png"
import Boltage from "../../../img/fxemoji_bolt.svg"
import FCMBLogo from "../../../img/image 17.png"
import "./style.css";
import { useNavigate } from "react-router-dom";
import Rectangle from "../../../img/Rectangle 1.png"
import Circle from "../../../img/Icons.png"
import Box from "../../tools/Rectangle";
import Icons from "../../tools/Circle";


interface DefaultProps {
    children: ReactNode; // Define the type for children
  }


 const Default = (): JSX.Element => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = () => {
    navigate('../../LoginScreen/LoginScreen.tsx'); // Navigate to the desired route
  };
  return (
    <div className="default-screen">
      <div className="overlap-3">
        <div className="frame">
          <div className="frame-2">
            <div className="overlap-4">
              <img className="mask-group" alt="Mask group" src={Guy1} />
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <p className="everything-is-ea-y">
                    <span className="span">Everything is Ea</span>  <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Boltage} /><span className="span">y with </span><span className="FCMB">FCMB</span>
                   
                  
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="frame-3">
              <Box/>
           <Icons/>
            </div> 
          </div>
        </div>
        <div className="frame-4">
     
          <img className="image" alt="Image" src={FCMBLogo} />
          <div className="go-back-home"> Go back home</div>
          
          
        </div>
       
      </div>
    </div>
  );
};

export default Default
