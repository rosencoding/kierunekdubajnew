import React, { useEffect, useRef } from 'react';

const GetYourGuideWidget = ({ tourIds, partnerId = '19WQ75B', numItems = 8 }) => {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    // Load GetYourGuide script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js';
      script.async = true;
      script.defer = true;
      
      script.onload = initializeWidget;
      document.body.appendChild(script);
    };

    // Initialize widget with proper configuration
    const initializeWidget = () => {
      if (!containerRef.current) return;
      
      // Clear previous widget if exists
      if (widgetRef.current) {
        containerRef.current.innerHTML = '';
      }

      // Create widget container
      const widgetContainer = document.createElement('div');
      widgetContainer.setAttribute('data-gyg-href', 'https://widget.getyourguide.com/default/activities.frame');
      widgetContainer.setAttribute('data-gyg-locale-code', 'pl-PL');
      widgetContainer.setAttribute('data-gyg-widget', 'activities');
      widgetContainer.setAttribute('data-gyg-number-of-items', numItems.toString());
      widgetContainer.setAttribute('data-gyg-partner-id', partnerId);
      widgetContainer.setAttribute('data-gyg-q', '');
      widgetContainer.setAttribute('data-gyg-tour-ids', tourIds);
      
      // Set widget styling
      widgetContainer.style.width = '100%';
      widgetContainer.style.minHeight = '400px';
      
      // Add widget to container
      containerRef.current.appendChild(widgetContainer);
      
      // Initialize widget
      if (window.GetYourGuide) {
        widgetRef.current = window.GetYourGuide.widgetEvents.initializeWidget();
      }
    };

    loadScript();

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[src*="widget.getyourguide.com"]');
      scripts.forEach(script => script.remove());
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [tourIds, partnerId, numItems]);

  return (
    <div className="gyg-widget-container">
      <div ref={containerRef} style={{ width: '100%', minHeight: '400px' }} />
      <div className="gyg-widget-footer" style={{ textAlign: 'center', marginTop: '10px' }}>
        <span>Powered by <a 
          target="_blank" 
          rel="sponsored noopener noreferrer" 
          href={`https://www.getyourguide.com/dubai-l173/?partner_id=${partnerId}`}
        >
          GetYourGuide
        </a></span>
      </div>
    </div>
  );
};

export default GetYourGuideWidget;
