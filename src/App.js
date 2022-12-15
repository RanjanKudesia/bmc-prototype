import { useState } from 'react';
import firebaseAuthService from './firebase/FirebaseAuthService';
import NavigationBar from './components/pages/navigationPage/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home/Home';
import SignupPage from './components/authentication/SignupPage';
import LoginPage from './components/authentication/LoginPage';
import Error from './components/pages/Error/Error';
import ResetPassword from './components/authentication/ResetPassword';
import AnalysisPage from './components/pages/Home/Analysis/Analysis';
import Commercial from './components/pages/Home/Commercial/Commercial';
import MonthlyDetails from './components/pages/Home/MonthlyDetails/MonthlyDetails';



const App = ({ data }) => {

  const [user, setUser] = useState(null);

  firebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <>
      <Routes>
        <Route element={<NavigationBar existingUser={user} />}>
          <Route exact path='/' element={user ? <Home data={data} existingUser={user} /> : <LoginPage data={data} existingUser={user} />} />
          <Route path='analysisPage' element={<AnalysisPage data={data} existingUser={user} />} />
          <Route path='commercial' element={<Commercial data={data} existingUser={user} />} />
          <Route path='monthlyDetails' element={<MonthlyDetails data={data} existingUser={user} />} />
          <Route path="signup" element={<SignupPage existingUser={user} />} />
          <Route path="login" element={<LoginPage data={data} existingUser={user} />} />
          <Route path="resetPassword" element={<ResetPassword existingUser={user} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );

}

export default App;
