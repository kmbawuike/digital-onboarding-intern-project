import React, { useState } from "react";

const ReferralInput: React.FC = () => {
  const [referralCode, setReferralCode] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter referral code"
        value={referralCode}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          maxWidth: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default ReferralInput;
