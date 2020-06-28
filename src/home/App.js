import React from 'react';
import './App.css';
import Navigation from "../common/navigation";
import Footer from "../common/footer";
import headLogo from '../common/fond-entete.jpg';

function App() {
  return (
    <div className="App">
        <img src={headLogo} alt="blanche-net" />
        <Navigation />
        <header className="App-body">

        </header>
        <Footer />
    </div>
  );
}

export default App;
