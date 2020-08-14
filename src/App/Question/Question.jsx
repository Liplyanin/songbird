import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './style.scss';

const Question = ({ randomBird }) => (
  <div className="container question">
    <img src={randomBird.image} alt="bird" />
    <div className="playerContainer">
      <h1>{randomBird.name}</h1>
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
