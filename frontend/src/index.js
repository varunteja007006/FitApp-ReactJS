import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//Stylings
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { WorkoutsContextProvider } from './context/WorkoutsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);


