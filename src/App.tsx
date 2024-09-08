import { Routes, Route } from 'react-router-dom';
import Home from './components/screens/Welcome';
import BVN from './BVN';
import LoginScreen from './components/screens/LoginScreen';
import OTP from './components/screens/OTP verification';
import Validation from './components/screens/Validation';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/BVN" element={<BVN />} />
            <Route path="/OTP" element={<OTP />} />
            <Route path="/Valid" element={<Validation />} />
            
            
         </Routes>
      </>
   );
};
 
export default App;