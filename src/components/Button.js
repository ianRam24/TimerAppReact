import React from 'react';
import '../css/Button.css';

function Button({ text, clickBtn, handleClick }) {
  return (
    <button
      className={clickBtn ? 'clickBtn' : 'resetBtn'}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
export default Button;
