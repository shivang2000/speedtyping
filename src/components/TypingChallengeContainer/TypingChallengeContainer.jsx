import React from 'react';
import './TypingChallengeContainer.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'

const TypingChallengeContainer = ({ 
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo
}) => {
    console.log(testInfo)
    return (
        <div className="typing-challenge-container">
            {/* details section */}
            <div className="details-container">
                {/* words Typed */}
                <ChallengeDetailsCard cardName="words" cardValue={words} />

                {/* Charateds Typed */}
                <ChallengeDetailsCard cardName="characters" cardValue={characters} />

                {/* speed */}
                <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />
    
            </div>

            {/* The real ChallengeSection */}
            <div className="typewriter-container">
                <TypingChallenge timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph} />
            </div>

        </div>
    );
}

export default TypingChallengeContainer;