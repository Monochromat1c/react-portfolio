import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    const baseTitle = 'CMD - Portfolio';
    const path = location.pathname;
    
    // Set title based on current route
    if (path === '/') {
      document.title = 'Welcome to my Portfolio!';
    } else {
      const sectionTitle = path.slice(1).charAt(0).toUpperCase() + path.slice(2);
      document.title = `${sectionTitle} | ${baseTitle}`;
    }
  }, [location.pathname]);
};

export default usePageTitle;