import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <svg className="svg">
          <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M1,0.142 l0,-0.001 h0 l0,-0.002 c0,-0.001,0,-0.002,0,-0.003 l0,-0.001 h0 l-0.001,-0.006 h0 l-0.002,-0.006,-0.002,-0.006 h0 l-0.002,-0.006 h0 l-0.002,-0.004 c0,-0.001,-0.001,-0.001,-0.001,-0.002 l0,0,0,0 c-0.001,-0.002,-0.002,-0.003,-0.003,-0.005 l0,0 h0 l-0.001,-0.002 c-0.001,-0.001,-0.001,-0.002,-0.002,-0.003 l-0.001,-0.001 h0 l-0.001,-0.001 a0.254,0.14,0,0,0,-0.063,-0.051 l0,0 h0 l0,0 q-0.003,-0.002,-0.006,-0.003 l-0.001,-0.001 h0 l-0.002,-0.001,-0.003,-0.001,-0.002,-0.001 h0 l-0.004,-0.002 h0 l-0.004,-0.002 h0 l-0.004,-0.002 h0 L0.884,0.027 h0 l-0.005,-0.002 L0.876,0.023 h0 l-0.005,-0.002 h0 l-0.004,-0.001,-0.005,-0.001 h0 L0.857,0.018 h0 l-0.005,-0.001,-0.004,-0.001,-0.005,-0.001 h0 l-0.005,-0.001 h0 l-0.005,-0.001 h0 l-0.004,-0.001 h0 l-0.005,-0.001 h0 L0.818,0.009 h0 l-0.005,-0.001 h0 l-0.005,-0.001 h0 l-0.006,-0.001 h0 l-0.005,-0.001 h0 l-0.006,-0.001 h0 l-0.005,-0.001,-0.006,-0.001 h0 l-0.005,-0.001,-0.006,-0.001 h0 l-0.004,0 q-0.005,0,-0.01,-0.001 L0.755,0.001 l-0.004,0 c-0.002,0,-0.003,0,-0.005,0 L0.744,0 h0 l-0.002,0 a0.287,0.158,0,0,0,-0.127,0.011 l0,0 h0 l0,0 c-0.004,0.001,-0.008,0.002,-0.013,0.003 l-0.001,0,-0.003,0.001,-0.001,0,-0.001,0 h0 l-0.002,0.001,-0.005,0.001,-0.003,0.001 h0 l-0.005,0.001 h0 l-0.004,0.001,-0.005,0.002 h0 l-0.004,0.001 h0 L0.564,0.027 l-0.004,0.002 h0 l-0.004,0.002 h0 l-0.004,0.002,-0.004,0.002 h0 l-0.004,0.002 h0 l-0.004,0.002,-0.004,0.002 h0 l-0.004,0.002 h0 l-0.004,0.002 L0.524,0.045 h0 l-0.003,0.002 h0 l-0.004,0.002 h0 l-0.003,0.002,-0.004,0.002 h0 l-0.003,0.002 h0 l-0.002,0.002 c0,0,-0.001,0,-0.001,0.001 l-0.003,0.002,-0.003,-0.002 c0,0,-0.001,0,-0.001,-0.001 l-0.002,-0.002 h0 l-0.003,-0.002 h0 l-0.003,-0.002 h0 l-0.003,-0.002,-0.004,-0.002 L0.476,0.045 h0 l-0.004,-0.002 h0 l-0.004,-0.002,-0.004,-0.002 h0 l-0.004,-0.002,-0.004,-0.002 h0 L0.453,0.033 h0 l-0.004,-0.002 L0.444,0.03 h0 l-0.004,-0.002 h0 L0.436,0.027 l-0.004,-0.002 h0 l-0.004,-0.001 h0 l-0.004,-0.002,-0.004,-0.001 h0 l-0.005,-0.001 h0 l-0.003,-0.001,-0.003,-0.001,-0.003,-0.001,-0.005,-0.001 h0 l-0.003,-0.001 A0.287,0.158,0,0,0,0.257,0 l-0.001,0 h0 L0.255,0 H0.255 l-0.003,0 h0 l-0.003,0 q-0.008,0,-0.015,0.001 l-0.004,0 h0 l-0.006,0.001 h0 l-0.005,0.001 h0 l-0.006,0.001,-0.005,0.001 h0 l-0.006,0.001,-0.005,0.001 h0 l-0.006,0.001 h0 l-0.005,0.001 h0 l-0.005,0.001 h0 l-0.005,0.001 h0 L0.171,0.011 l-0.005,0.001 h0 l-0.005,0.001,-0.004,0.001 h0 l-0.005,0.001,-0.004,0.001 h0 l-0.005,0.001 L0.138,0.019 h0 L0.133,0.02 h0 L0.129,0.022 h0 l-0.005,0.002 h0 l-0.004,0.001 L0.115,0.027 h0 l-0.004,0.002 h0 l-0.005,0.002 h0 L0.104,0.031 l-0.002,0.001,-0.004,0.001 h0 l-0.001,0.001 A0.255,0.14,0,0,0,0.023,0.087 l-0.001,0.001 h0 l-0.002,0.003,-0.001,0.001,-0.001,0.001 h0 l-0.002,0.002 c-0.001,0.001,-0.001,0.002,-0.002,0.003 l0,0.001 h0 L0.011,0.105 h0 l-0.003,0.006 h0 L0.006,0.116 h0 l-0.002,0.006,-0.002,0.006 h0 l-0.001,0.006 h0 l-0.001,0.006 h0 L0,0.144 v0.003 H0 V0.856 c0,0.001,0,0.001,0,0.002 l0,0.002 h0 l0.001,0.006 h0 l0.001,0.006 h0 l0.002,0.006 h0 L0.006,0.884 h0 l0.002,0.006 h0 l0.003,0.006 h0 l0.002,0.004,0.001,0.001,0,0.001 h0 l0.001,0.001 c0.001,0.001,0.002,0.003,0.003,0.004 l0,0.001,0.002,0.002 c0.001,0.001,0.001,0.001,0.002,0.002 l0.001,0.001 h0 l0.001,0.001 a0.255,0.14,0,0,0,0.074,0.053 l0.001,0.001,0.004,0.002,0,0,0,0 h0 l0.004,0.002 h0 l0.005,0.002,0.004,0.002 h0 l0.005,0.002,0.004,0.001 h0 l0.005,0.002 h0 l0.004,0.001 L0.138,0.981 h0 l0.004,0.001 h0 l0.005,0.001 h0 l0.004,0.001 h0 l0.005,0.001,0.004,0.001 h0 l0.005,0.001 h0 l0.005,0.001 h0 l0.005,0.001 h0 l0.005,0.001,0.005,0.001 h0 l0.005,0.001 h0 l0.006,0.001,0.005,0.001 h0 l0.006,0.001 h0 l0.005,0.001,0.006,0.001 h0 l0.005,0.001 h0 l0.005,0,0.005,0,0.001,0 h0 l0.006,0 h0 l0.001,0,0.002,0,0.002,0,0.002,0 a0.287,0.158,0,0,0,0.147,-0.013 l0.001,0,0.001,0 c0.002,-0.001,0.004,-0.001,0.006,-0.002 l0.002,0 h0 l0.005,-0.001 h0 l0.004,-0.001 h0 l0.005,-0.002,0.004,-0.001,0.004,-0.002 h0 l0.004,-0.001,0.004,-0.002 h0 l0.004,-0.002,0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.003,-0.002,0.004,-0.002 h0 l0.003,-0.002 h0 l0.002,-0.002,0.002,-0.001,0.003,-0.002 h0 l0.002,-0.002,0.001,-0.001,0.003,-0.002,0.003,0.002 c0,0,0.001,0,0.001,0.001 l0.002,0.002 h0 l0.003,0.002,0.004,0.002 h0 l0.003,0.002 h0 l0.004,0.002,0.003,0.002,0.004,0.002,0.004,0.002 h0 l0.004,0.002,0.004,0.002,0.004,0.002 h0 l0.004,0.002,0.004,0.002,0.004,0.002 h0 l0.004,0.002,0.004,0.002 h0 l0.004,0.002 h0 l0.004,0.001 h0 l0.005,0.002,0.004,0.001 h0 l0.005,0.002 h0 l0.005,0.001 L0.596,0.984 h0 l0.002,0 c0.002,0.001,0.005,0.001,0.007,0.002 l0,0 h0 l0,0 c0.005,0.001,0.009,0.002,0.014,0.003 l0,0 h0 l0,0 a0.289,0.159,0,0,0,0.134,0.01 l0.001,0,0.005,0 h0 l0.003,0 q0.005,0,0.009,-0.001 l0.005,0 h0 l0.005,-0.001 h0 l0.006,-0.001,0.005,-0.001 h0 l0.006,-0.001 h0 l0.005,-0.001,0.006,-0.001 h0 l0.005,-0.001 h0 l0.005,-0.001 h0 l0.005,-0.001 h0 l0.005,-0.001 h0 l0.004,-0.001,0.005,-0.001 h0 l0.005,-0.001,0.005,-0.001 h0 L0.852,0.984 h0 l0.005,-0.001,0.004,-0.001 h0 l0.005,-0.002 h0 l0.004,-0.001 h0 l0.005,-0.002 h0 l0.004,-0.001 h0 l0.005,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002 h0 l0.004,-0.002,0.002,-0.001 A0.255,0.141,0,0,0,0.979,0.91 l0.003,-0.004,0.004,-0.006 h0 l0.003,-0.006 h0 l0.003,-0.006 h0 l0.002,-0.006 h0 l0.002,-0.006 h0 l0.002,-0.006 h0 l0.001,-0.005 c0,-0.002,0.001,-0.005,0.001,-0.007 l0,0 h0 l0,-0.003 V0.144 C1,0.143,1,0.142,1,0.142"></path></clipPath>
        </svg>

        <div className="clipped"></div>
      </div>
    </div>
  );
}

export default App;