import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClickAnimation from './components/ClickAnimation';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <Router>
      <div className="relative">
        <ClickAnimation />
        <CursorTrail />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
