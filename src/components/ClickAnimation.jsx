import { useState, useEffect } from 'react';

const ClickAnimation = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newCircle = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setCircles((prevCircles) => [...prevCircles, newCircle]);

      // Remove the circle after animation
      setTimeout(() => {
        setCircles((prevCircles) => 
          prevCircles.filter((circle) => circle.id !== newCircle.id)
        );
      }, 1000); // Match this with the animation duration
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="click-circle"
          style={{
            left: circle.x,
            top: circle.y,
          }}
        />
      ))}
    </>
  );
};

export default ClickAnimation;
