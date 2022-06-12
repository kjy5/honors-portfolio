import './styles/index.css'

import Artifacts from './components/Artifacts'
import InProgress from './components/InProgress'
import React from 'react'
// noinspection ES6CheckImport
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { getArtifactNames } from './scripts/content-handler'

getArtifactNames().then((artifactNames) => {
  console.log(artifactNames)
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

        {
          artifactNames.map((artifactName) => {
            return <Route key={artifactName} path={`/honors-portfolio/${artifactName}`} element={
              <div>{artifactName}</div>
            }/>
          })
        }

        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </BrowserRouter>
  )
})
