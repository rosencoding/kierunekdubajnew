import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { ItineraryProvider } from './contexts/ItineraryContext';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <ItineraryProvider>
        <App />
      </ItineraryProvider>
    ),
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
