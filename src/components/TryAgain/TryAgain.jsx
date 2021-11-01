import React from 'react';
import './TryAgain.css';

const TryAgain = ({words, characters, wpm}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Wpm:</b> {wpm}
                </p>
            </div>

            <div>
                <button className="end-button start-again">Re-try</button>
                <button 
                    className="end-button share-btn" 
                    onClick={() => {
                    window.open("https://www.facebook.com/sharer/sharer.php?u=Checkitout", "facebook-share-dialog", "width=800px", "height=600px");
                    }}
                >
                    Share
                </button>
            </div>
        </div>
    );
}

export default TryAgain;