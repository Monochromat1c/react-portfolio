import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import ClickAnimation from './components/ClickAnimation';
import CursorTrail from './components/CursorTrail';
import usePageTitle from './hooks/usePageTitle';
import Footer from './components/Footer';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const scrollToTop = () => {
      // First try with smooth behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      // Force scroll after a small delay as backup
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    // Execute scroll on route change
    scrollToTop();

    // Also handle browser back/forward buttons
    window.addEventListener('popstate', scrollToTop);
    
    return () => {
      window.removeEventListener('popstate', scrollToTop);
    };
  }, [pathname]);
  
  return null;
};

// PageTitle component to handle dynamic title updates
const PageTitle = () => {
  usePageTitle();
  return null;
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <PageTitle />
        <ClickAnimation />
        <CursorTrail />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
