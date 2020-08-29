import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import bird from '../../assets/bird.jpg';
import './style.scss';

const Question = ({ randomBird, veracityOfAnswer }) => (
  <div className="container question">
    {
      veracityOfAnswer
        ? <img src={randomBird.image} alt="bird" />
        : <img src={bird} alt="bird" />
    }
    <div className="playerContainer">
      {
        !veracityOfAnswer
          ? <h1>******</h1>
          : <h1>{randomBird.name}</h1>
      }
      <AudioPlayer
        src={randomBird.audio}
        showJumpControls={false}
        customAdditionalControls={[]}
        autoPlayAfterSrcChange={false}
        showDownloadProgress={false}
      />
    </div>

  </div>
);

export default Question;
