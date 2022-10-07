import { useState } from 'react';
import firebaseAuthService from './firebase/FirebaseAuthService';
import NavigationBar from './components/Home/NavigationBar';
import DashBoard from './components/pages/DashBoard';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import SignupPage from './components/authentication/SignupPage';
import LoginPage from './components/authentication/LoginPage';

const App = () => {

  const [user, setUser] = useState(null);

  firebaseAuthService.subscribeToAuthChanges(setUser);

  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<NavigationBar />}>
          <Route path='home' element={<Home />} />
          <Route path="dashBoard" element={<DashBoard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignupPage existingUser={user} />} />
          <Route path="login" element={<LoginPage existingUser={user} />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );

}

export default App;
