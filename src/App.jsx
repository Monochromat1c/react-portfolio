import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ClickAnimation from './components/ClickAnimation';
import CursorTrail from './components/CursorTrail';
import usePageTitle from './hooks/usePageTitle';

function App() {
  usePageTitle();
  
  return (
    <Router>
      <div className="relative">
        <ClickAnimation />
        <CursorTrail />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
