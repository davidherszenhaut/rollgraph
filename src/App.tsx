import React, { ReactElement, useState } from "react";
import { rollDice, aggregateData, Data } from "./utils";
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

  function buildTable() {
    const data: Array<Data> = aggregateData(rolls);
    return (
      <div id="rollsTableContainer">
        <table>
          <thead>
            <tr>
              <th>Value</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.value.toString() + item.count.toString()}>
                <td key={item.value}>{item.value}</td>
                <td key={item.value.toString() + item.count.toString()}>
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <h1>🎲 rollgraph 📈</h1>
      </header>
      <p>
        I would like to roll a{" "}
        <input
          className="numberInput"
          type="number"
          min="1"
          value={faces}
          onChange={(e) => setFaces(parseInt(e.target.value))}
        />
        -sided die{" "}
        <input
          className="numberInput"
          type="number"
          min="1"
          value={times}
          onChange={(e) => setTimes(parseInt(e.target.value))}
        />{" "}
        {times === 1 ? "time" : "times"}.
      </p>
      <button id="rollDiceButton" onClick={updateRolls}>
        Roll Dice!
      </button>
      {rolls.length <= 2 ? <p>{rolls.join(", ")}</p> : buildTable()}
      <p>
        <label>
          {" "}
          Keep Rolls
          <input
            type="checkbox"
            onChange={(e) => setShouldKeepRolls(e.target.checked)}
          />
        </label>
      </p>
      {rolls.length > 1 ? <PieChart rolls={rolls} /> : null}
    </div>
  );
}

export default App;
