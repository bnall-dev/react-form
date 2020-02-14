import React, { useState } from 'react';
import Stats from './Stats';
import Input from './Input';
import Output from './Output';
import './App.css';

function App() {
  let [numbers, setNumbers] = useState([]);
  let [uniques, setUniques] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    let number = Math.ceil(Math.random() * 10);
    let evenOnly = document.querySelector('#evenOnly');
    let oddOnly = document.querySelector('#oddOnly');

    if (evenOnly.checked && !oddOnly.checked) {
      if (number % 2 === 0) {
        let numsCopy = [...numbers, number];
        setNumbers(numsCopy);
        if (!uniques.includes(numsCopy[numsCopy.length - 1])) {
          let uniquesCopy = [...uniques, numsCopy[numsCopy.length - 1]];
          setUniques(uniquesCopy);
        }
      } else {
        let numsCopy = [...numbers, number + 1];
        setNumbers(numsCopy);
        if (!uniques.includes(numsCopy[numsCopy.length - 1])) {
          let uniquesCopy = [...uniques, numsCopy[numsCopy.length - 1]];
          setUniques(uniquesCopy);
        }
      }
    } else if (oddOnly.checked && !evenOnly.checked) {
      if (number % 2 === 1) {
        let numsCopy = [...numbers, number];
        setNumbers(numsCopy);
        if (!uniques.includes(numsCopy[numsCopy.length - 1])) {
          let uniquesCopy = [...uniques, numsCopy[numsCopy.length - 1]];
          setUniques(uniquesCopy);
        }
      } else {
        let numsCopy = [...numbers, number + 1];
        setNumbers(numsCopy);
        if (!uniques.includes(numsCopy[numsCopy.length - 1])) {
          let uniquesCopy = [...uniques, numsCopy[numsCopy.length - 1]];
          setUniques(uniquesCopy);
        }
      }
    } else {
      let numsCopy = [...numbers, number];
      setNumbers(numsCopy);
      if (!uniques.includes(numsCopy[numsCopy.length - 1])) {
        let uniquesCopy = [...uniques, numsCopy[numsCopy.length - 1]];
        setUniques(uniquesCopy);
      }
    }
  };

  return (
    <div className="App">
      <h1>Even-Odd</h1>
      <Stats uniques={uniques} />
      <Input submitHandler={submitHandler} />
      <Output numbers={numbers} setNumbers={setNumbers} />
    </div>
  );
}

export default App;
