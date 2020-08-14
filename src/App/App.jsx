/* eslint-disable no-param-reassign */
import React from 'react';
import Answer from './Answer/Answer';
import Header from './Header/Header';
import Question from './Question/Question';
import Description from './Description/Description';
import birdsData from '../assets/data';
import './style.scss';

const stateDefault = {
  currentLevel: 0,
  clickedBird: null,
};

class App extends React.Component {
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
    const { data, currentLevel } = this.state;
    const clickedBird = data[currentLevel][el];
    this.setState({ clickedBird });
  }

  render() {
    const {
      randomBird, data, currentLevel, clickedBird,
    } = this.state;
    return (
      <div className="app">

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
                      getClickedBird={this.getClickedBird}
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
