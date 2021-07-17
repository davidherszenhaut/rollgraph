import React, { useState } from 'react';
import { generateRandomIntegerInclusive } from './utils';
import './App.css';

function App() {

  const [randomInt, setRandomInt] = useState<number>(0);

  return (
    <div className="App">
      <header>🎲 rollgraph 📈</header>
      <button onClick={() => setRandomInt(generateRandomIntegerInclusive(1, 6))}>Click Me!</button>
      <p>{randomInt}</p>
    </div>
  );
}

export default App;
