// src/App.tsx
import React from "react";
import "./App.css"; // Import CSS for styling (optional)
import LoginScreen from "./components/screens/LoginScreen"; // Adjust the path if needed
import Welcome from "./components/screens/Welcome";

import FCMB2 from "./components/BVN";
import FCMB3 from "./components/screens/OTP verification";
import Defaultage from "./components/screens/OTP verification";
import TryEverything from "./Test.React";
import OTP from "./components/screens/OTP verification";
import DefaultFemale from "./components/screens/Successful";
import Validation from "./components/screens/Validation";
import Form from "./components/screens/Form";
import FaceID from "./components/screens/Face-ID";
import Test from "./components/screens/test";
import Default from "./components/screens/Successful";
import NINentry from "./components/screens/EnterNIN";
import Profile from "./components/screens/Pre-Profile";
import Terms from "./components/screens/T&C";
import Validation2 from "./components/screens/Validation copy";
import Validation3 from "./components/screens/Validation copy 2";
import OTP2 from "./components/screens/OTP2";

import Testing from "./components/screens/test";
import "./index.css";
import BVN from "./components/BVN";

// Define a functional component with TypeScript
const App: React.FC = () => {
  return (
    <div className="App">
      {" "}
      {/* Added div wrapper for consistent styling */}
      <LoginScreen />
    </div>
  );
};

export default App;
