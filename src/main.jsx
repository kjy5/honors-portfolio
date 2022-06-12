import './styles/index.css'

import Artifacts from './components/Artifacts'
import InProgress from './components/InProgress'
import React from 'react'
// noinspection ES6CheckImport
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('main'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/honors-portfolio" element={
        <React.StrictMode>
          <div id="top"/>
          <InProgress/>
          <Artifacts/>
        </React.StrictMode>
      }/>
      <Route path="/honors-portfolio/hi" element={<div>Hi</div>}/>
      <Route path="*" element={<div>404</div>}/>
    </Routes>
  </BrowserRouter>
)
