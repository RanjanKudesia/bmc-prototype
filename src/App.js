import { useState } from 'react';
import firebaseAuthService from './firebase/FirebaseAuthService';
import NavigationBar from './components/pages/navigationPage/NavigationBar';
import DashBoard from './components/pages/Home/dashboard/DashBoard';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home/Home';
import Contact from './components/pages/Home/contactPage/Contact';
import SignupPage from './components/authentication/SignupPage';
import LoginPage from './components/authentication/LoginPage';
import Error from './components/pages/Error/Error';
import ResetPassword from './components/authentication/ResetPassword';
import AnalysisPage from './components/pages/Home/Analysis/Analysis';
import Commercial from './components/pages/Home/Commercial/Commercial';

const App = () => {

  const [user, setUser] = useState(null);

  firebaseAuthService.subscribeToAuthChanges(setUser);

  // const location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      <Routes>
        <Route exact element={<NavigationBar existingUser={user} />}>
          <Route path='/' element={user?<Home existingUser={user} />:<LoginPage existingUser={user} />} />
          <Route path='home' element={<Home existingUser={user} />} />
          <Route path='analysisPage' element={<AnalysisPage existingUser={user} />} />
          <Route path='commercial' element={<Commercial existingUser={user} />} />
          {/* <Route path="dashBoard" element={<DashBoard existingUser={user} />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignupPage existingUser={user} />} />
          <Route path="login" element={<LoginPage existingUser={user} />} />
          <Route path="resetPassword" element={<ResetPassword existingUser={user} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );

}

export default App;
