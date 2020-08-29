import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './style.scss';

const Description = ({ clickedBird }) => (
  <div className="container description_container">
    {!clickedBird
      ? (
        <h5>
          Послушайте плеер.
          <br />
          Выберите птицу из списка
        </h5>
      )
      : (
        <>
          <div className="descritionHeader">
            <img src={clickedBird.image} alt="bird" />
            <div className="player">
              <div className="name">
                {clickedBird.name}
              </div>
              <div className="species">
                {clickedBird.species}
              </div>
              <AudioPlayer
                src={clickedBird.audio}
                showJumpControls={false}
                customAdditionalControls={[]}
                autoPlayAfterSrcChange={false}
              />
            </div>

          </div>

          <div className="description">
            {clickedBird.description}
          </div>

        </>
      )}

  </div>
);

export default Description;
