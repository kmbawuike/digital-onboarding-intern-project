import React from "react";
import "./style.css";
import Cycle from "../../img/Icons.png";

interface FrameProps {
  onClick?: () => void; // Add an optional onClick prop
}

const Frame: React.FC<FrameProps> = ({ onClick }): JSX.Element => {
  return (
    <div className="button-frame" onClick={onClick} style={{ cursor: "pointer" }}>
      <img className="cool-icons" src={Cycle} alt="Cycle Icon" style={{left:"32px"}} />
      <div className="rectangle" />
    </div>
  );
};

export default Frame;
