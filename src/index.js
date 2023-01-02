import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/pages/Loading/Loading';
import App from './App';
import { sortedData } from '../src/firebase/fetchData';

async function fetchData() {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    </React.StrictMode>
  );
  const data = await sortedData();
  // console.log(data);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={data} />
      </BrowserRouter>
    </React.StrictMode>
  );

}
fetchData();