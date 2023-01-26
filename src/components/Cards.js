import React, { useState, useEffect } from 'react';
import Card from './Card';
import "../styles/Cards.css";

export default function Cards({incrementScore, endCurrentStage, resetCards}) {

    let numOfCards = 12;
    let arr = new Array(numOfCards).fill(0);

    let [positions, setPositions] = useState(
        arr.map((value, index) => index + 1)
    );
    
    function unshuffle() {
        return arr.map((value, index) => index + 1);
    }

    function shuffle(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }

    function organizeCards() {
        setPositions(unshuffle());
    }

    function randomizeCards() {
        setPositions(shuffle(positions));
    }

    useEffect(() => {
        if (resetCards) {
            organizeCards();
        }
    }, [resetCards])

    return (
        <div className='cards-container'>
            {positions.map((position) => {
                return (
                    <Card 
                        key={position}
                        id={position}
                        randomizeCards={randomizeCards}
                        incrementScore={incrementScore}
                        endCurrentStage={endCurrentStage}
                        resetCards={resetCards}
                    />
                )
            })}
        </div>
    )
}