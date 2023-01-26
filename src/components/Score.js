import React from 'react';
import "../styles/Score.css";

export default function Score({score, bestScore}) {
    return (
        <div className='score-container'>
            <p id="best-score">Best Score: {bestScore}</p>
            <p id="score">Score: {score}</p>
        </div>
    )
}