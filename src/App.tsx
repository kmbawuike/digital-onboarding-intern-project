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
import Done from './components/screens/Successful';
import Protect from './components/screens/Protect'
import NIN from './components/screens/ProtectNIN'
import Form from './components/screens/Form';
import OTP2 from './components/screens/OTP2';
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