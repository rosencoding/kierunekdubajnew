import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import usePageTitle from '../hooks/usePageTitle';

const PageLayout = () => {
  usePageTitle();

  return (
    <div className="flex flex-col min-h-screen">
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
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
