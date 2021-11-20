import react from 'react';
import './TestLetter.css'

export default function TestLetter({ individualLetterInfo }) {
    const { status } = individualLetterInfo

    const statusclassName = {
        correct: 'test-letter-correct',
        incorect: 'test-letter-incorrect',
        notAttempted:'test-letter-not-attempted'
    }[status]

    

    return (
        <span className={`test-letter ${statusclassName}`}>
            { individualLetterInfo.testLetter}
        </span>
    );
};