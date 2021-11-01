import React from 'react';
import './App.css'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';

const TotalTime = 60;
// eslint-disable-next-line
const serviceUrl = 'http://metaphorpsum.com/paragraphs/2/4'

class App extends React.Component {
    state = {
        selectedParagraph: "hello world!",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: [],
    }

    componentDidMount() {
        // fetch(serviceUrl)
        //     .then(response => response.text())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({ selectedParagraph: data })
        //     })

        const selectedParagraphArray = this.state.selectedParagraph.split('');
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted"
            };
        });
        this.setState({ testInfo: testInfo });
    }

    render() {
        // fetch(serviceUrl).then(response => response.text()).then(information => console.log('fetch is'+ information))

        return (
            <div className="app">
                {/* Nav seections */}
                <Nav />
                {/* lading pages */}
                <Landing />
                {/* challenges section */}
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph} 
                    words={this.state.words} 
                    characters={this.state.characters} 
                    wpm={this.state.wpm} 
                    timeRemaining={this.state.timeRemaining} 
                    timerStarted={this.state.timerStarted} 
                    testInfo={this.state.testInfo}
                />
                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

export default App;