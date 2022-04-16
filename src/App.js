import './App.css';
import logo from './img/logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';
function App() {
  const [clicksNumber, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicksNumber + 1);
  };
  const resetClick = () => {
    setClicks(0);
  };
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="FreeCodeCamp Logo" className="logo" />
      </div>
      <div className="main-container">
        <Button text="click" clickBtn={true} handleClick={handleClick} />
        <Button text="Reset" clickBtn={false} handleClick={resetClick} />
        <Counter clicksNumber={clicksNumber} />
      </div>
    </div>
  );
}

export default App;
