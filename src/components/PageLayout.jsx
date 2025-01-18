import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageTitle from '../hooks/usePageTitle';

const PageLayout = ({ children }) => {
  usePageTitle();

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
        
        script.onerror = (error) => {
          console.error('Error loading GetYourGuide widget:', error);
        };

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
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-grow pt-16"> 
          <div className="container mx-auto px-4">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
