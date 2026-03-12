import React from 'react';
import "./App.css";

const Singer = ({singer}) => {
  return (
    <div className='student'>
      <h3>Singer Name: {singer.name}</h3>
      <p>Singer Age: {singer.age} </p>
    </div>
  );
};

export default Singer;