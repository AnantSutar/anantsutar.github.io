import React, { useEffect, useRef, useState } from 'react';
import './Notes.css';

const Notes = () => {
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [note, setNote] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [selectedStar, setSelectedStar] = useState(null); // Stores the clicked star for the modal

  // Set fixed positions for stars
  const starPositions = [
    { x: 100, y: 150 },
    { x: 300, y: 250 },
    { x: 500, y: 350 },
    { x: 700, y: 450 },
    { x: 900, y: 150 },
    { x: 1100, y: 250 }
  ];

  // Initialize stars with names and coordinates
  const initializeStars = () => {
    const initialStars = starPositions.map((pos) => ({
      ...pos,
      glowing: true,
      note: '',
      name: ''
    }));
    setStars(initialStars);
  };

  // Draw stars on canvas
  const drawStars = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, 10, 0, Math.PI * 2, false);
      ctx.fillStyle = star.glowing ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)';
      ctx.shadowBlur = star.glowing ? 20 : 0;
      ctx.shadowColor = 'white';
      ctx.fill();

      // Draw visitor's name near the star if it exists
      if (star.name) {
        ctx.font = '14px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(star.name, star.x + 15, star.y);
      }
    });
  };

  // Handle star clicks
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const clickedStarIndex = stars.findIndex(star => {
      const dx = star.x - mouseX;
      const dy = star.y - mouseY;
      return Math.sqrt(dx * dx + dy * dy) < 10; // Check if click is within the star radius
    });

    if (clickedStarIndex !== -1) {
      const clickedStar = stars[clickedStarIndex];
      setSelectedStar(clickedStar); // Open the modal with star details
    }
  };

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleNameChange = (e) => {
    setVisitorName(e.target.value);
  };

  const handleSubmitNote = (e) => {
    e.preventDefault();
    const newStars = [...stars];
    const unfilledStarIndex = newStars.findIndex(star => !star.note && !star.name); // Find the first star without a note
    if (unfilledStarIndex !== -1) {
      newStars[unfilledStarIndex].note = note; // Save the note
      newStars[unfilledStarIndex].name = visitorName; // Save visitor's name
      newStars[unfilledStarIndex].glowing = false; // Stop glowing
      setStars(newStars);
      setNote(''); // Clear input
      setVisitorName(''); // Clear visitor name input
    } else {
      alert('All stars are taken!');
    }
  };

  useEffect(() => {
    initializeStars(); // Initialize stars when the component mounts
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawStars(ctx);
  }, [stars]);

  // Close modal handler
  const closeModal = () => {
    setSelectedStar(null); // Close the modal
  };

  return (
    <div className="notes-container">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} onClick={handleCanvasClick} />
      
      <form onSubmit={handleSubmitNote} className="note-form">
        <input type="text" value={visitorName} onChange={handleNameChange} placeholder="Your Name" required />
        <input type="text" value={note} onChange={handleInputChange} placeholder="Leave a note..." required />
        <button type="submit">Submit</button>
      </form>

      {/* Modal for showing star details */}
      {selectedStar && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>close</span>
            <h2>Visitor: {selectedStar.name}</h2>
            <p>Message: {selectedStar.note}</p>
            <button onClick={closeModal} className="modal-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
