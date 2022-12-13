
import React from 'react';
import './App.css';
import Start from '../src/components/start'

function App() {

  return (
    <div onContextMenu={(e) => e.preventDefault()} className="clipped">
      <Start />
    </div>
  )
}

export default App;


