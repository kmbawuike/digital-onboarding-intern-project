import React from "react";
import "./style.css";
import JohnDoe from "../../img/Icons.svg"
 const Box = (): JSX.Element => {
 return (
 <div className="box">
 <img className="ellipse" alt="Ellipse" src={JohnDoe} />
 </div>
 );
};

export default Box