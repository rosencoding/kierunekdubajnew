import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ItineraryProvider } from './contexts/ItineraryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ItineraryProvider>
        <App />
      </ItineraryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
