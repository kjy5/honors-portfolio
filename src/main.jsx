import './styles/index.css'

import Artifacts from './components/Artifacts'
import Graphics from './scripts/graphics'
import InProgress from './components/InProgress'
import React from 'react'
import { createRoot } from 'react-dom/client'

// Run Graphics
Graphics()

// Render HTML
const root = createRoot(document.querySelector('main'))
root.render(
  <React.StrictMode>
    <div id="top"/>
    <InProgress/>
    <Artifacts/>
  </React.StrictMode>
)
