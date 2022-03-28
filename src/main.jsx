import './styles/index.css'

import Artifacts from './components/Artifacts'
import Graphics from './scripts/graphics'
import InProgress from './components/InProgress'
import React from 'react'
import ReactDOM from 'react-dom'

// Run Graphics
Graphics()

// Render HTML
ReactDOM.render(
  <React.StrictMode>
    <div id="top"/>
    <InProgress/>
    <Artifacts/>
  </React.StrictMode>,
  document.querySelector("main")
);
