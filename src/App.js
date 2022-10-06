// eslint-disable-next-line no-unused-vars
import firebase from './firebase/FirebaseConfig';
import NavigationBar from './components/NavigationBar';
import DashBoard from './components/pages/DashBoard';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<NavigationBar />}>
          <Route path='home' element={<Home />} />
          <Route path="dashBoard" element={<DashBoard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );

}

export default App;
