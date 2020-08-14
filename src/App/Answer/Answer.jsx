import React from 'react';
import './style.scss';

const Answer = ({ data, currentLevel, getClickedBird }) => {
  const handleClick = ({ target }) => {
    getClickedBird(target.id - 1);
  };

  return (
    <div className="container answer">
      <ul onClick={handleClick}>
        {data[currentLevel].map((el) => (
          <li className="answerItem" id={el.id} key={el.species}>
            <div className="str" id={el.id}>
              <div className="dot" id={el.id} />
              {el.name}
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Answer;
