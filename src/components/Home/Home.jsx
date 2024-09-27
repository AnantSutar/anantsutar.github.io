import React, { useState } from 'react';
import Socials from '../Socials/Socials';
import Navbar from '../Navbar/Navbar';
import StarryBackground from './StarryBackground'; // For the starry background
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [score, setScore] = useState(0);

  const updateScore = (points) => {
    setScore(prevScore => prevScore + points);
  };

  return (
    <>
      <StarryBackground /> {/* Include the starry background */}
      <div className="main">
        <h1>Hi, I'm Anant Sutar</h1>
        <h3>Software Engineer and Data Scientist</h3>
        <Socials updateScore={updateScore} />
      </div>
    </>
  );
};

export default Home;
