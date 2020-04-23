import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button> Meaw! Meaw! I'm a Cat </button>
        <button> Woof! Woof! I'm a Dog </button>
        <button> Muuuu!! Muuuu!! I'm a Cow </button>
        <button> Dããã!! I'm Homer! </button>
      </header>
    </div>
  );
}

export default App;
