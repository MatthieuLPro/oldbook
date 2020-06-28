import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BasicExample from "../common/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicExample />
      </header>
    </div>
  );
}

export default App;
