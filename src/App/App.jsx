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
  endOfGame: false,
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
    const progres = document.getElementById('levels');
    progres.children[currentLevel + 1].style = 'background-color: green';
    if (level !== 5) {
      const randomBird = this.getRandomBird(birdsData[level].slice());
      this.setState({
        randomBird,
        veracityOfAnswer: false,
        clickedBird: null,
        currentLevel: level,
      });
    } else {
      const randomBird = this.getRandomBird(birdsData[0].slice());
      this.setState({
        randomBird,
        veracityOfAnswer: false,
        clickedBird: null,
        currentLevel: 0,
        endOfGame: true,
      });
    }
  }

  resetGame=() => {

  }

  render() {
    const {
      randomBird, data, currentLevel, clickedBird, veracityOfAnswer, endOfGame,
    } = this.state;
    return (
      <div className="app">
        <audio src={error} ref={this.error} />
        <audio src={correct} ref={this.correct} />
        <div className="wrapper">
          {
            this.state === stateDefault || endOfGame
              ? (
                <div className="result">
                  <h3> Поздравляем! </h3>
                  <div className="text">
                    Вы прошли викторину и набрали 19 из 30 возможных баллов
                  </div>

                  <button onClick={() => {
                    this.setState({
                      endOfGame: false,

                    });
                  }}
                  >
                    next

                  </button>
                </div>
              )
              : (
                <>
                  <Header
                    veracityOfAnswer={veracityOfAnswer}
                  />
                  <Question randomBird={randomBird} veracityOfAnswer={veracityOfAnswer} />
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
