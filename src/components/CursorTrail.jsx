import { useState, useEffect } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const trail = {
      x: mousePosition.x,
      y: mousePosition.y,
      id: Date.now(),
    };

    setTrails((prevTrails) => [...prevTrails, trail]);

    // Keep only the last 20 trail points
    if (trails.length > 20) {
      setTrails((prevTrails) => prevTrails.slice(1));
    }

    // Remove trail point after animation
    const timer = setTimeout(() => {
      setTrails((prevTrails) => prevTrails.filter((t) => t.id !== trail.id));
    }, 500);

    return () => clearTimeout(timer);
  }, [mousePosition]);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: 1 - (index / trails.length),
            scale: 1 - (index / trails.length) * 0.5,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
