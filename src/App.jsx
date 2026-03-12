import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>VITE + REACT</h1>
      <Person></Person>
      <Sports></Sports>
    </>
  );
}

function Person() {
  const age = 27;
  const name = "Shafrin";
  return (
    <p>
      I'm {name}, and I'm {age} years old
    </p>
  );
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
    </div>
  );
}
export default App;
