import React from 'react';
import './App.css';
import CreateButton from './components/CreateButton.js'
import Header from './components/Header.js'
import Body from "./components/Body.js"
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header/>
          <Body/>
        </header>
      </div>
    </Router>
  );
}

export default App;
