import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Search from '../search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
          {/*  <Route exact path={'/'}>*/}
          {/*    <App />*/}
          {/*  </Route>*/}
            <Route exact path={'/search'}>
              <Search />
            </Route>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
