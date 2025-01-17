import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (defaultTitle) => {
  const location = useLocation();

  const formatAttractionName = (path) => {
    // Extract the attraction name from the URL
    const attractionSlug = path.split('/').pop();
    // Convert slug to title case and replace hyphens with spaces
    return attractionSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    const baseSuffix = 'KierunekDubaj.pl - Twój przewodnik po Dubaju';
    let newTitle = defaultTitle || baseSuffix;

    // Check if current path is an attraction page or Abu Dhabi attraction
    if (location.pathname.startsWith('/atrakcje/') || location.pathname.startsWith('/abu-dhabi/')) {
      const attractionName = formatAttractionName(location.pathname);
      
      // Add "Abu Dhabi -" prefix for Abu Dhabi attractions
      if (location.pathname.startsWith('/abu-dhabi/')) {
        newTitle = `${attractionName} (Abu Dhabi) - ${baseSuffix}`;
      } else {
        newTitle = `${attractionName} - ${baseSuffix}`;
      }
    } else {
      // Handle other specific routes
      const pageTitles = {
        '/': baseSuffix,
        '/abu-dhabi': 'Abu Dhabi - KierunekDubaj.pl',
        '/dubaj': 'Dubaj - KierunekDubaj.pl',
        '/fujairah': 'Fujairah - KierunekDubaj.pl',
        '/ras-al-khaimah': 'Ras Al Khaimah - KierunekDubaj.pl',
        '/sharjah': 'Sharjah - KierunekDubaj.pl',
        '/atrakcje': 'Atrakcje w Dubaju - KierunekDubaj.pl',
        '/plan-podrozy': 'Plan podróży - KierunekDubaj.pl',
        '/blog': 'Blog - KierunekDubaj.pl',
        '/kontakt': 'Kontakt - KierunekDubaj.pl',
        '/poznaj-dubaj': 'Poznaj Dubaj - KierunekDubaj.pl',
        '/podstawowe-informacje': 'Podstawowe Informacje - KierunekDubaj.pl',
        '/kiedy-jechac': 'Kiedy jechać do Dubaju - KierunekDubaj.pl',
        '/transport': 'Transport w Dubaju - KierunekDubaj.pl',
        '/dzielnice': 'Dzielnice Dubaju - KierunekDubaj.pl',
        '/kultura-i-zwyczaje': 'Kultura i Zwyczaje - KierunekDubaj.pl',
        '/praktyczne-porady': 'Praktyczne Porady - KierunekDubaj.pl'
      };
      
      newTitle = pageTitles[location.pathname] || newTitle;
    }

    document.title = newTitle;

    return () => {
      document.title = baseSuffix;
    };
  }, [location.pathname, defaultTitle]);
};

export default usePageTitle;
