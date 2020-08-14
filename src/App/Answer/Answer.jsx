import React from 'react';
import './style.scss';

const Answer = ({
  data, currentLevel, getClickedBird,
  veracityOfAnswer, showNextLevel, randomBird, errorRef, correctRef,
}) => {
  const handleBirdClick = ({ target }) => {
    getClickedBird(target.id - 1);
    const dot = document.querySelector(`.dot_${target.id}`);

    if (+target.id === randomBird.id) {
      dot.style = 'background-color: green;';
      correctRef.play();
    } else {
      dot.style = 'background-color: red;';
      errorRef.play();
    }
  };

  return (
    <div className="container answer">
      <ul onClick={handleBirdClick} id="ul">
        {data[currentLevel].map((el) => (
          <li className="answerItem" id={el.id} key={el.species}>
            <div className="str" id={el.id}>
              <div className={`dot dot_${el.id}`} id={el.id} />
              {el.name}
            </div>
          </li>
        ))}
      </ul>

      <button onClick={showNextLevel} disabled={!veracityOfAnswer}>Next Level</button>
    </div>
  );
};

export default Answer;
