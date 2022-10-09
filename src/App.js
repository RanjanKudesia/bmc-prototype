import { useState } from 'react';
import firebaseAuthService from './firebase/FirebaseAuthService';
import NavigationBar from './components/pages/navigationPage/NavigationBar';
import DashBoard from './components/pages/Home/dashboard/DashBoard';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home/Home';
import Contact from './components/pages/Home/contactpPage/Contact';
import SignupPage from './components/authentication/SignupPage';
import LoginPage from './components/authentication/LoginPage';
import Error from './components/pages/Error/Error';
import ResetPassword from './components/authentication/ResetPassword';

const App = () => {

  const [user, setUser] = useState(null);

  firebaseAuthService.subscribeToAuthChanges(setUser);

  // const location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<NavigationBar existingUser={user} />}>
          <Route path='home' element={<Home existingUser={user} />} />
          <Route path="dashBoard" element={<DashBoard existingUser={user} />} />
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
