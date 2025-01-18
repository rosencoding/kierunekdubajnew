import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import usePageTitle from '../hooks/usePageTitle';

const PageLayout = ({ children }) => {
  // The hook will automatically handle title updates based on the URL
  usePageTitle();

  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="F6Lb6dQqoyYufmrte8-8s1LIM5lIDahURjdBan-T1vY" />
        <script async defer src="https://widget.getyourguide.com/dist/pa.umd.production.min.js" data-gyg-partner-id="19WQ75B"></script>
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
