
import React from 'react';
import './App.css';
import Start from '../src/components/start'

function App() {

  return (
    <div onContextMenu={(e)=> e.preventDefault()} className="App">
      <div className="left">
        <div className="clipped">
            <Start />
        </div>
      </div>
    </div>
  )
}

export default App;


