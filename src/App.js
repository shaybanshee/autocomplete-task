import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './HideableText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
      </header>
      <div className="App-content"> 
        <HideableText text="Dynamic Text!"/>
      </div>
    </div>
  );
}

export default App;
