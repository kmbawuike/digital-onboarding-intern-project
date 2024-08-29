// src/App.tsx
import React from 'react';
import './App.css'; // Import CSS for styling (optional)
import LoginScreen from './components/screens/LoginScreen/LoginScreen'; // Adjust the path if needed
import Welcome from './components/screens/WelcomeScreen/Welcome';
import Default from './components/screens/Default/DefaultPage';


// Define a functional component with TypeScript
const App: React.FC = () => {
  return (
    <div className="App"> {/* Added div wrapper for consistent styling */}
  <Welcome/>
    </div>
  );
};

export default App;
