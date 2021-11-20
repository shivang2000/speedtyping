import React from 'react';
import './TypingChallenge.css';
import TestLetter from '../Testletter/TestLetter';

const TypingChallenge = ({   timeRemaining, timerStarted, testInfo, onInputChange }) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining}</p>
                <p className="timer-info">{
                    !timerStarted && "Start Typing to start the test"
                }</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualletterinfo, index) => {
                                return ( 
                                    <TestLetter 
                                        key={index }
                                        individualLetterInfo={individualletterinfo}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)} 
                        className="textarea"
                        placeholder="Start Typing"
                    >
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;