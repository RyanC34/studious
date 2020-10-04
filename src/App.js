import React from 'react';
import './App.css';
import CreateButton from './components/CreateButton.js'
import Header from './components/Header.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <CreateButton/>
      </header>
    </div>
  );
}

export default App;
