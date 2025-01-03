import { useEffect } from 'react';

const usePageTitle = () => {
  useEffect(() => {
    const updateTitle = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const viewportMiddle = window.innerHeight / 2;
      
      // Find which section is most visible
      let currentSection = 'home';
      let maxVisibility = 0;

      sections.forEach(sectionId => {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibility = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = sectionId;
          }
        }
      });

      // Update the page title based on the current section
      const baseTitle = 'Charles Manuel Diestro';
      const sectionTitle = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
      document.title = currentSection === 'home' ? baseTitle : `${sectionTitle} | ${baseTitle}`;
    };

    // Update title on scroll
    window.addEventListener('scroll', updateTitle);
    // Initial title update
    updateTitle();

    // Cleanup
    return () => window.removeEventListener('scroll', updateTitle);
  }, []);
};

export default usePageTitle; 