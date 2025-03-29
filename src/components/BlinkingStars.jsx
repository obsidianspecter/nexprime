import React, { useEffect, useState } from 'react';
import './BlinkingStars.css'; // Import the CSS file for styling

const BlinkingStars = () => {
    const [shootingStars, setShootingStars] = useState([]);
    
    // Generate a random position for a shooting star
    const generateShootingStar = () => {
        return {
            id: Math.random(),
            top: Math.random() * 70, // % from top
            left: Math.random() * 80, // % from left
            duration: 0.5 + Math.random() * 1.5, // Random duration between 0.5 and 2s
            size: 1 + Math.random() * 2, // Random size between 1 and 3
            angle: 30 + Math.random() * 30 // Random angle between 30 and 60 degrees
        };
    };
    
    // Create shooting stars at random intervals
    useEffect(() => {
        const interval = setInterval(() => {
            if (shootingStars.length < 3) { // Limit to 3 shooting stars at a time
                setShootingStars(prev => [...prev, generateShootingStar()]);
            }
        }, 2000 + Math.random() * 3000); // Random interval between 2 and 5 seconds
        
        // Remove shooting stars after they've completed their animation
        const cleanupInterval = setInterval(() => {
            setShootingStars(prev => {
                if (prev.length > 0) {
                    // Remove the oldest shooting star
                    const newStars = [...prev];
                    newStars.shift();
                    return newStars;
                }
                return prev;
            });
        }, 3000);
        
        return () => {
            clearInterval(interval);
            clearInterval(cleanupInterval);
        };
    }, [shootingStars.length]);
    
    // Create an array of 150 stars with varying size and animation
    const stars = Array.from({ length: 150 }).map((_, index) => {
        const size = 1 + Math.random() * 2; // Random size between 1 and 3px
        const twinkleSpeed = 0.5 + Math.random() * 2.5; // Random animation speed
        const initialDelay = Math.random() * 5; // Random initial delay
        
        return (
            <div 
                key={index} 
                className="star" 
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${twinkleSpeed}s`,
                    animationDelay: `${initialDelay}s`,
                    opacity: Math.random() * 0.7 + 0.3, // Random opacity between 0.3 and 1
                }}
            />
        );
    });

    return (
        <div className="starfield">
            {stars}
            
            {/* Shooting stars */}
            {shootingStars.map(star => (
                <div 
                    key={star.id}
                    className="shooting-star"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${80 + Math.random() * 120}px`,
                        height: `${star.size}px`,
                        transform: `rotate(${star.angle}deg)`,
                        animationDuration: `${star.duration}s`,
                    }}
                />
            ))}
            
            {/* Star clusters */}
            <div className="star-cluster" style={{ top: '20%', left: '15%' }} />
            <div className="star-cluster" style={{ top: '65%', left: '80%' }} />
            <div className="star-cluster" style={{ top: '45%', left: '60%' }} />
        </div>
    );
};

export default BlinkingStars;