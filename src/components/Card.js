import React, { useState, useEffect } from 'react';
import "../styles/Card.css";

export default function Card({ id, randomizeCards, incrementScore, endCurrentStage, resetCards }) {

    let [clicked, setClicked] = useState(false);

    function handleClick() {
        if(clicked) {
            endCurrentStage();
            return;
        }

        incrementScore();
        randomizeCards();
        setClicked(!clicked);
    }

    useEffect(() => {
        if (resetCards) {
            setClicked(false);
        }
    }, [resetCards])

    let pathToImage;
    try {
        pathToImage = require(`../images/memory-card-${id}.jpeg`);
    }
    catch(e) {
        pathToImage = require(`../images/memory-card-${id}.webp`);
    }

    return (
        <div className='card-container' onClick={handleClick}>
            <img src={pathToImage} />
        </div>
    )
}