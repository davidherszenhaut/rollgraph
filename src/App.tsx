import React, { ReactElement, useState } from "react";
import { rollDice } from "./utils";
import "./App.css";
import PieChart from "./PieChart/PieChart";

function App(): ReactElement {
  const [faces, setFaces] = useState<number>(6);
  const [times, setTimes] = useState<number>(1);
  const [rolls, setRolls] = useState<number[]>([]);
  const [shouldKeepRolls, setShouldKeepRolls] = useState<boolean>(false);

  function updateRolls() {
    if (shouldKeepRolls) {
      setRolls([...rolls, ...rollDice(faces, times)]);
    } else {
      setRolls(rollDice(faces, times));
    }
  }

  return (
    <div className="App">
      <header>
        <h1>🎲 rollgraph 📈</h1>
      </header>
      <p>
        I would like to roll a{" "}
        <input
          type="number"
          min="1"
          value={faces}
          onChange={(e) => setFaces(parseInt(e.target.value))}
        />
        -sided die{" "}
        <input
          type="number"
          min="1"
          value={times}
          onChange={(e) => setTimes(parseInt(e.target.value))}
        />{" "}
        {times === 1 ? "time" : "times"}.
      </p>
      <button onClick={updateRolls}>Roll Dice!</button>
      <p>{rolls.join(", ")}</p>
      <input
        type="checkbox"
        onChange={(e) => setShouldKeepRolls(e.target.checked)}
      />
      <PieChart data={rolls} />
    </div>
  );
}

export default App;
