import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Cire Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person name="shafrin Ahamed" age="27"></Person>
      <Developer name="shakib" tech="react"></Developer>
      <Developer name="babu" tech="JS"></Developer>
      <Device deviceName="Laptop" ram="8GB"></Device>
      <Player name="shakib" runs="10,000"></Player>
      <Player name="Mushi" runs="5,000"></Player>
      <Salami event="Rojar Eid" amount = "500"></Salami>
      <Salami event="Graduation" amount = "10000"></Salami>
      <Books bookName = "Physics" division = "Science"></Books>
    </>
  );
}

function Books({bookName, division}){
  return (
    <div className="student">
      <p>Books Name: {bookName} </p>
      <p>Class: {division}</p>
    </div>
  )
}

function Salami({event, amount}){
  return (
    <div className="student">
      <p>Salami For: {event}</p>
      <p>Amount: {amount} TK</p>

    </div>
  );
}

// const {name, runs} = {name: "tamim", runs: "10,000"};

function Player({name, runs}) {
  // console.log(props);
  return (
    <div className="student">
      <h3>Player Name: {name} </h3>
      <p>Runs: {runs} </p>
    </div>
  );
}

const { name, No } = { name: "Shakib Al Hasan", No: 75 };

function Device(props) {
  return (
    <div>
      <p>Device Name: {props.deviceName} </p>
      <p>RAM: {props.ram} </p>
    </div>
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
      I'm {props.name} , and I'm {props.age} years old
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
