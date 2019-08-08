import React, { useState } from 'react';
import './App.css';

import Display from './Display'
import Dashboard from './Dashboard'

function App() {
  const [atBat, setAtBat] = useState({
    strikes: 0,
    balls: 0,
    hits: 0
  })

  return (
    <div className='container'>
      <h1 className='heading'>Lambda</h1>
      <Display
      atBat={atBat}
      setAtBat={setAtBat}
      />
      <Dashboard
      atBat={atBat}
      setAtBat={setAtBat}
      />
    </div>
  );
}

export default App;
