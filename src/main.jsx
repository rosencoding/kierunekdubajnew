import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { ItineraryProvider } from './contexts/ItineraryContext';
import ErrorBoundary from './components/ErrorBoundary';

// Create router with future flags enabled
const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <ErrorBoundary>
        <ItineraryProvider>
          <App />
        </ItineraryProvider>
      </ErrorBoundary>
    ),
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
