import React from "react";
import Buttons from "../tools/Buttons";
import FaceIdScreen from "../tools/faceid";
import "../screens/Default/Face-ID.css";
 const FaceID = (): JSX.Element => {
 return (
 <div className="frame">
 <div className="div">
 <div className="text-wrapper">Facial Recognition</div>
 <p className="n">
 Get a clear background
 <br />
 Steady your camera
 </p>
 <div className="group">
    <div className="face-id">
    <FaceIdScreen/>
    </div>

 </div>
 <div className="div-2" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
  <button className="div-wrapper" style={{borderRadius:"50px"}}>Cancel</button>
  <Buttons
    border="none"
    color="#60088C" // Button color
    height="70px"
    onClick={console.log} // Button click handler
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
export default FaceID