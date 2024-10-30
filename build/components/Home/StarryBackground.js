import React, { useEffect, useRef } from 'react';
const StarryBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];

    // Set canvas to fullscreen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Star constructor
    function Star(x, y, size, speed) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speed = speed;
      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
      };
      this.update = function () {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      };
    }

    // Initialize stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const speed = Math.random() * 0.5;
        stars.push(new Star(x, y, size, speed));
      }
    };

    // Animate stars
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => star.update());
      requestAnimationFrame(animateStars);
    };
    initStars();
    animateStars();

    // Clean up the resize event listener
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: styles.canvas
  });
};
const styles = {
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    // Make sure the canvas is behind the content
    backgroundColor: '#000000' // Dark blue space-like background
  }
};
export default StarryBackground;