import { useState, useEffect } from 'react';
import firebaseAuthService from './firebase/FirebaseAuthService';
import NavigationBar from './components/pages/navigationPage/NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home/Home';
import Contact from './components/pages/Home/contactPage/Contact';
import SignupPage from './components/authentication/SignupPage';
import LoginPage from './components/authentication/LoginPage';
import Error from './components/pages/Error/Error';
import ResetPassword from './components/authentication/ResetPassword';
import AnalysisPage from './components/pages/Home/Analysis/Analysis';
import Commercial from './components/pages/Home/Commercial/Commercial';
import About from './components/pages/Home/About/About';
import { getSixMonthsData } from './firebase/fetchData';


const App = () => {

  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  firebaseAuthService.subscribeToAuthChanges(setUser);


  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getSixMonthsData();
      setData(fetchedData);
    }
    fetchData();
  }, [])

  console.log(data);


  // const location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      <Routes>
        <Route exact element={<NavigationBar existingUser={user} />}>
          <Route path='/' element={user ? <Home data={data} existingUser={user} /> : <LoginPage existingUser={user} />} />
          <Route path='home' element={<Home data={data} existingUser={user} />} />
          <Route path='analysisPage' element={<AnalysisPage data={data} existingUser={user} />} />
          <Route path='commercial' element={<Commercial data={data} existingUser={user} />} />
          <Route path="about" element={<About />} />
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
