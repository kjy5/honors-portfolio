import './styles/index.css'

// noinspection ES6CheckImport
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getContent, getURLName } from './scripts/content-handler'
import ArtifactContents from './components/ArtifactContents'
import Artifacts from './components/Artifacts'
import { createRoot } from 'react-dom/client'
import Graphics from './scripts/graphics' // skipcq: JS-0249
import InProgress from './components/InProgress' // skipcq: JS-0249
import React from 'react'

getContent().then((contentData) => {
  // Start Graphics
  Graphics()

  // Render app
  const root = createRoot(document.querySelector('main'))
  root.render(
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route
          path="/honors-portfolio"
          element={
            <React.StrictMode>
              <div id="top" />
              <InProgress />
              <Artifacts contentData={contentData} />
            </React.StrictMode>
          }
        />

        {/* Artifact Routes */}
        {contentData.map((artifact) => {
          return (
            <Route
              key={artifact.title}
              path={`/honors-portfolio/${getURLName(artifact.title)}`}
              element={
                <React.StrictMode>
                  <ArtifactContents artifact={artifact} />
                </React.StrictMode>
              }
            />
          );
        })}

        {/* 404 Route */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
});
