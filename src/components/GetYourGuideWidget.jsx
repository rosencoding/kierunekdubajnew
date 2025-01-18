import React, { useEffect, useRef } from 'react';

const GetYourGuideWidget = ({ tourIds, partnerId = '19WQ75B', numItems = 8 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadScript = async () => {
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
        
        // Add error handling
        script.onerror = (error) => {
          console.error('Error loading GetYourGuide widget:', error);
        };

        // Add the script to document
        document.body.appendChild(script);

        // Initialize widget after script loads
        script.onload = () => {
          if (containerRef.current && window.GetYourGuide) {
            const widgetContainer = document.createElement('div');
            widgetContainer.setAttribute('data-gyg-href', 'https://widget.getyourguide.com/default/activities.frame');
            widgetContainer.setAttribute('data-gyg-locale-code', 'pl-PL');
            widgetContainer.setAttribute('data-gyg-widget', 'activities');
            widgetContainer.setAttribute('data-gyg-number-of-items', numItems.toString());
            widgetContainer.setAttribute('data-gyg-partner-id', partnerId);
            widgetContainer.setAttribute('data-gyg-tour-ids', tourIds);
            
            // Clear container and add new widget
            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(widgetContainer);

            // Initialize the widget
            window.GetYourGuide.widgetEvents.initializeWidget();
          }
        };

        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      } catch (error) {
        console.error('Failed to initialize GetYourGuide widget:', error);
      }
    };

    loadScript();
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
