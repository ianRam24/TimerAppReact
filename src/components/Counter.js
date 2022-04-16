import React from 'react';
import '../css/Counter.css';

export default function Counter({ clicksNumber }) {
  return <div className="counter">{clicksNumber} </div>;
}
