import React from 'react';
import './BlinkingStars.css'; // Import the CSS file for styling

const BlinkingStars = () => {
    // Create an array of 50 regular stars
    const regularStars = Array.from({ length: 50 }, (_, index) => (
        <div key={`star-${index}`} className="star" />
    ));

    // Create an array of 10 shooting stars
    const shootingStars = Array.from({ length: 10 }, (_, index) => (
        <div key={`shooting-star-${index}`} className="shooting-star" />
    ));

    return (
        <div className="starfield">
            {regularStars}
            {shootingStars}
        </div>
    );
};

export default BlinkingStars;