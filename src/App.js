import React from 'react';
import './App.css';
import CreateButton from './components/CreateButton.js'
import Header from './components/Header.js'
import Body from "./components/Body.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Body/>
      </header>
    </div>
  );
}

export default App;
