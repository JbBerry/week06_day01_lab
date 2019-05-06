import React from 'react';
import './App.css';
import DiceRoller from './DiceRoller';

function App() {
  const dice = {
    small:6,
    medium:12,
    large:20
  }
  return (
    <>
        <h1> Roll The Dice </h1>
        < DiceRoller dice={dice} />
    </>
  );
}

export default App;
