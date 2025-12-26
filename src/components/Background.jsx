import React from 'react';
import './Styles/Background.css';

/**
 * Animated Space Background with parallax star layers
 */
const Background = () => {
  return (
    <div className="stars-container">
      {/* Background stars (different sizes and speeds in CSS) */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default Background;