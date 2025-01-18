import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ItineraryProvider } from './contexts/ItineraryContext';
import ErrorBoundary from './components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ItineraryProvider>
          <App />
        </ItineraryProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
