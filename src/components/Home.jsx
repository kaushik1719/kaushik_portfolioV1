import React, { useState, useEffect } from 'react';
import './Styles/Home.css';

const Home = () => {
  // State for typewriter effect
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Array of roles to cycle through in the typewriter box
  const data = [
    "Kaushik Kanani",
    "Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Innovator",
    "Designer",
    "Creative"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % data.length;
      const fullText = data[i];

      // Determine text based on whether we are typing or deleting
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      // Set speed: faster when deleting
      setTypingSpeed(isDeleting ? 70 : 150);

      // Logic to switch between typing and deleting phases
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end of word
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to next word in array
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, data]);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h3 className="hello-text">Hello,</h3>
        <div className="title-container">
          <h1 className="main-title">I'm</h1>
          {/* Dynamic typewriter display */}
          <div className="typewriter-box">
            {displayText}<span className="cursor">|</span>
          </div>
        </div>
        <p className="home-subtitle">
          I am a Frontend Developer and Graphics Designer
        </p>
      </div>

      {/* Visual indicator for scrolling interaction */}
      <div className="container_mouse">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default Home;