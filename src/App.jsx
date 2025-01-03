import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import ClickAnimation from './components/ClickAnimation';
import CursorTrail from './components/CursorTrail';
import usePageTitle from './hooks/usePageTitle';
import Footer from './components/Footer';

function App() {
  usePageTitle();
  
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <ClickAnimation />
        <CursorTrail />
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
