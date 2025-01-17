import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

const PageLayout = ({ children }) => {
  // The hook will automatically handle title updates based on the URL
  usePageTitle();

  return (
    <>
      {children}
    </>
  );
};

export default PageLayout;
