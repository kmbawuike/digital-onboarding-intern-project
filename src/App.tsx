import { Routes, Route } from 'react-router-dom';
import Home from './components/screens/Welcome';
import BVN from './BVN';
import LoginScreen from './components/screens/LoginScreen';
import OTP from './components/screens/OTP verification';
import Validation from './components/screens/Validation';
import Valid2 from './components/screens/ProfileValidation';
import Valid3 from './components/screens/TermsValidation';
import TC from './components/screens/Terms'
import Terms from './components/screens/T&C';
import Conditions from './components/screens/Terms';
import Success from './components/screens/Successful';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/BVN" element={<BVN />} />
            <Route path="/OTP" element={<OTP />} />
            <Route path="/Valid" element={<Validation />} />
            <Route path='/Valid2' element={<Valid2/>}/>
            <Route path='/Valid3' element={<Valid3/>}/>
            <Route path='/TC' element={<Conditions/>}/>
            
            
            
         </Routes>
      </>
   );
};
 
export default App;