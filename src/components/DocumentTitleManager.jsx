import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DocumentTitleManager = () => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const getPageTitle = () => {
      // Default title
      const defaultTitle = 'KierunekDubaj.pl - Przewodnik po Dubaju';

      // Check if it's an attraction page
      if (pathname.startsWith('/atrakcje/')) {
        const attractionName = pathname.split('/').pop();
        const formattedName = attractionName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        return `${formattedName} - KierunekDubaj.pl`;
      }

      // Main pages mapping
      const pageTitles = {
        '/': defaultTitle,
        '/abu-dhabi': 'Abu Dhabi - KierunekDubaj.pl',
        '/dubaj': 'Dubaj - KierunekDubaj.pl',
        '/fujairah': 'Fujairah - KierunekDubaj.pl',
        '/ras-al-khaimah': 'Ras Al Khaimah - KierunekDubaj.pl',
        '/sharjah': 'Sharjah - KierunekDubaj.pl',
        '/atrakcje': 'Atrakcje w Dubaju - KierunekDubaj.pl',
        '/plan': 'Plan podróży - KierunekDubaj.pl',
        '/blog': 'Blog - KierunekDubaj.pl',
        '/kontakt': 'Kontakt - KierunekDubaj.pl',
        '/poznaj-dubaj': 'Poznaj Dubaj - KierunekDubaj.pl',
        '/faq': 'FAQ - KierunekDubaj.pl',
        '/podstawowe-informacje': 'Podstawowe Informacje - KierunekDubaj.pl',
        '/kiedy-jechac': 'Kiedy jechać do Dubaju - KierunekDubaj.pl',
        '/transport': 'Transport w Dubaju - KierunekDubaj.pl',
        '/dzielnice': 'Dzielnice Dubaju - KierunekDubaj.pl',
        '/kultura-i-zwyczaje': 'Kultura i zwyczaje - KierunekDubaj.pl',
        '/praktyczne-porady': 'Praktyczne porady - KierunekDubaj.pl'
      };

      // Check Abu Dhabi attractions
      if (pathname.startsWith('/abu-dhabi/')) {
        const attractionName = pathname.split('/').pop();
        const formattedName = attractionName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        return `${formattedName} (Abu Dhabi) - KierunekDubaj.pl`;
      }

      return pageTitles[pathname] || defaultTitle;
    };

    document.title = getPageTitle();
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default DocumentTitleManager;
