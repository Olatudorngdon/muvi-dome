import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css'; // ✅ Add this at the top
import './index.css'; // Optional: Import your global CSS styles
// In App.js




ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);