import React from 'react';
import './style.scss';
import logo from '../../assets/logo.svg';

function Header({ score }) {
  return (
    <div className="header ">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="score">
          Score:
          {score}
        </div>
      </div>
      <div className="levels" id="levels">
        <div className="item">Разминка</div>
        <div className="item">Воробьиные</div>
        <div className="item">Лесные птицы</div>
        <div className="item">Певчие птицы</div>
        <div className="item">Хищные птицы</div>
        <div className="item">Морские птицы</div>
      </div>
    </div>

  );
}

export default Header;
