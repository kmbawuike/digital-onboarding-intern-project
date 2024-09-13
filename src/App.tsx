import { Routes, Route } from 'react-router-dom';
import Home from './components/screens/WelcomeScreen/Welcome';
import BVN from './components/BVN';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import OTP from './components/OTP/OTP verification';
import Validation from './components/Validation/Validation';
import Valid2 from './components/Validation/ProfileValidation';
import Valid3 from './components/Validation/TermsValidation';

import Conditions from './components/screens/Terms';
import Done from './components/screens/Successful';
import Protect from './components/ProtectNIN/Protect'
import NIN from './components/ProtectNIN/ProtectNIN'
import Form from './components/Form/Form';
import OTP2 from './components/OTP/OTP2';
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
            <Route path ='/Success' element={<Done/>}/> 
            <Route path ='/Protect' element={<Protect/>}/> 
            <Route path ='/NIN' element={<NIN/>}/> 
            <Route path ='/Form' element={<Form/>}/>
            <Route path ='/OTP2' element={<OTP2/>}/>
            
         </Routes>
      </>
   );
};
 
export default App;