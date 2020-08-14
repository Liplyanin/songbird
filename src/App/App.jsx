/* eslint-disable no-param-reassign */
import React from 'react';
import Answer from './Answer/Answer';
import Header from './Header/Header';
import Question from './Question/Question';
import Description from './Description/Description';
import birdsData from '../assets/data';
import correct from '../assets/correct.mp3';
import error from '../assets/error.mp3';
import './style.scss';

const stateDefault = {
  currentLevel: 0,
  clickedBird: null,
  veracityOfAnswer: false,
};

class App extends React.Component {
  error = React.createRef()

  correct = React.createRef()

  constructor(props) {
    super(props);
    this.state = stateDefault;
  }

  componentDidMount() {
    const randomBird = this.getRandomBird(birdsData[0].slice());

    this.setState({
      randomBird,
      data: birdsData,
    });
  }

  getRandomBird = (array) => {
    for (let i = 0; i < array.length; i += 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array[0];
  }

  getClickedBird = (el) => {
    const { data, currentLevel, randomBird } = this.state;
    const clickedBird = data[currentLevel][el];
    this.setState({ clickedBird });

    if (clickedBird.id === randomBird.id) {
      this.setState({ veracityOfAnswer: true });
    }
  }

  showNextLevel = () => {
    const { currentLevel } = this.state;
    const level = currentLevel + 1;
    const randomBird = this.getRandomBird(birdsData[level].slice());
    this.setState({
      randomBird,
      veracityOfAnswer: false,
      clickedBird: null,
      currentLevel: level,
    });
  }

  render() {
    const {
      randomBird, data, currentLevel, clickedBird, veracityOfAnswer,
    } = this.state;
    return (
      <div className="app">
        <audio src={error} ref={this.error} />
        <audio src={correct} ref={this.correct} />
        <div className="wrapper">
          {
            this.state === stateDefault
              ? ''
              : (
                <>
                  <Header />
                  <Question randomBird={randomBird} />
                  <div className="centralBlock">
                    <Answer
                      data={data}
                      currentLevel={currentLevel}
                      veracityOfAnswer={veracityOfAnswer}
                      randomBird={randomBird}
                      getClickedBird={this.getClickedBird}
                      showNextLevel={this.showNextLevel}
                      errorRef={this.error.current}
                      correctRef={this.correct.current}
                    />
                    <Description
                      clickedBird={clickedBird}
                    />
                  </div>
                </>
              )
          }

        </div>

      </div>
    );
  }
}
export default App;
