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
    element: <App />,
    errorElement: <ErrorBoundary />,
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }
});

// Wrap the app with necessary providers
const AppWithProviders = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <ItineraryProvider>
        <RouterProvider router={router} />
      </ItineraryProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Create root and render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWithProviders />);
