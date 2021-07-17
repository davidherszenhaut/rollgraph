import React, { useState } from 'react';
import { generateRandomIntegerInclusive } from './utils';
import './App.css';

function App() {

  const [faces, setFaces] = useState<string>('6');
  const [times, setTimes] = useState<string>('1');
  const [rolls, setRolls] = useState<number[]>([]);

  function rollDice(faces: number, times: number) {
    let rolls = [];
    for (let i = 0; i < times; i++) {
      rolls.push(generateRandomIntegerInclusive(1, faces));
    }
    console.log(rolls);
    setRolls(rolls);
  }

  return (
    <div className="App">
      <header>
        <h1>🎲 rollgraph 📈</h1>
      </header>
      <p>I would like to roll a <input type="number" min="1" value={faces} onChange={e => setFaces(e.target.value)} />-sided die <input type="number" min="1" value={times} onChange={e => setTimes(e.target.value)} /> {times === "1" ? "time" : "times"}.</p>
      <button onClick={() => rollDice(parseInt(faces), parseInt(times))}>Roll Dice!</button>
      <p>{rolls.join(', ')}</p>
    </div>
  );
}

export default App;
