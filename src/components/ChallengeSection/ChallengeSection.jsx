import React from "react";
import "./ChallengeSection.css";
import TestContainer from '../TestContainer/TestContainer'

const ChallengeSection = ({ 
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo
}) => {
    
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <TestContainer selectedParagraph={selectedParagraph} timeRemaining={timeRemaining} words={words} timerStarted={timerStarted} characters={characters} wpm={wpm} testInfo={testInfo}/>
           
        </div>
    );
};

export default ChallengeSection;
