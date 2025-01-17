import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      // Define page titles mapping
      const pageTitles = {
        '/': 'KierunekDubaj.pl - Twój przewodnik po Dubaju',
        '/abu-dhabi': 'Abu Dhabi - KierunekDubaj.pl',
        '/dubaj': 'Dubaj - KierunekDubaj.pl',
        '/fujairah': 'Fujairah - KierunekDubaj.pl',
        '/ras-al-khaimah': 'Ras Al Khaimah - KierunekDubaj.pl',
        '/sharjah': 'Sharjah - KierunekDubaj.pl',
        '/atrakcje': 'Atrakcje w Dubaju - KierunekDubaj.pl',
        '/plan': 'Plan podróży - KierunekDubaj.pl',
        '/blog': 'Blog - KierunekDubaj.pl',
        '/kontakt': 'Kontakt - KierunekDubaj.pl'
      };

      // Return matching title or default
      return pageTitles[pathname] || 'KierunekDubaj.pl - Twój przewodnik po Dubaju';
    };

    // Update document title
    document.title = getPageTitle(location.pathname);
  }, [location]);
};
