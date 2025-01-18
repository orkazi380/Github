import React from 'react';
import { useState } from 'react';
import './App.css';
function App() {
  let [counter, setCounter] = useState(0);
  let inc=()=>{
    if(!(counter>=20)){
    setCounter(counter+1)
    console.log(counter) 
    }
  }
  let dec=()=>{
    if(!(counter<=0)){
      setCounter(counter - 1);
      console.log(counter)
    }
  }
  return (
    <div className="App">
      {/* <p>the color is {counter}</p> */}
      {/* <button onClick={() => setCounter("white")}>White</button>
      <button onClick={() => setCounter("Green")}>Green</button>
      <button onClick={() => setCounter("Blue")}>Blue</button>
      <button onClick={() => setCounter("Black")}>Black</button> */}
      <h1>Counter: {counter}</h1>
      <button onClick={inc}>Incearse {counter}</button>
      <button onClick={dec}>Decrease {counter}</button>
    </div>
  );
}

export default App;