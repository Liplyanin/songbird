import React from 'react';
import './style.scss';

function Header() {
  return (
    <div className="header ">
      <h1>SONGBIRD</h1>
      <div className="levels">
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
