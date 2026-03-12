import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Cire Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person name="shafrin Ahamed" age = "27"></Person>
      <Developer name="shakib" tech = "react"></Developer>
      <Developer name="babu" tech = "JS"></Developer>
    </>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Depart Name:</p>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    color: "red",
    textAlign: "center",
  };
  
  return (
    <p style={personStyle}>
      I'm {props.name} , and I'm {props.age}  years old
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
