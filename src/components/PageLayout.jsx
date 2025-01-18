import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  useEffect(() => {
    const loadGYGScript = async () => {
      try {
        // Remove any existing GYG scripts
        const existingScripts = document.querySelectorAll('script[src*="getyourguide"]');
        existingScripts.forEach(script => script.remove());

        // Create and load the new script
        const script = document.createElement('script');
        script.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.setAttribute('data-gyg-partner-id', '19WQ75B');
        
        // Add error handling
        script.onerror = (error) => {
          console.error('Error loading GetYourGuide widget:', error);
        };

        // Initialize widget after script loads
        script.onload = () => {
          if (window.GetYourGuide) {
            window.GetYourGuide.widgetEvents.initializeWidget();
          }
        };

        document.body.appendChild(script);

        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      } catch (error) {
        console.error('Failed to initialize GetYourGuide widget:', error);
      }
    };

    loadGYGScript();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="F6Lb6dQqoyYufmrte8-8s1LIM5lIDahURjdBan-T1vY" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XQ2N5KC7J1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XQ2N5KC7J1');
          `}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
