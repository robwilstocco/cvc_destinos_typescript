import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <Header name='Robert'/>
      <Menu name='Robert'/>
      <Body />
    </div>
  );
}

export default App;
