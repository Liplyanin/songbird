import React from 'react';
import './style.scss';

const Description = ({ clickedBird }) => (
  <div className="container description">
    {!clickedBird
      ? (
        <h5>
          Послушайте плеер.
          Выберите птицу из списка
        </h5>
      )
      : (
        <>
          {clickedBird.description}
        </>
      )}

  </div>
);

export default Description;
