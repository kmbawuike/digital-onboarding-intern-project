import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  disabled?: boolean; // Optional disabled prop
}

const Button: React.FC<Props> = ({ 
  border,
  color,
  children,
  height,
  onClick, 
  radius,
  width,
  disabled = false // Default to false if not provided
}) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         cursor: disabled ? "not-allowed" : "pointer", // Change cursor style if disabled
         opacity: disabled ? 0.5 : 1 // Optional: reduce opacity if disabled
      }}
      disabled={disabled} // Pass disabled prop to button element
    >
      {children}
    </button>
  );
}

export default Button;
