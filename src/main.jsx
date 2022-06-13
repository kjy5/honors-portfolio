import "./styles/index.css";

import Artifacts from "./components/Artifacts";
import ArtifactContents from "./components/ArtifactContents";
import InProgress from "./components/InProgress";
import React from "react";
// noinspection ES6CheckImport
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { getContent, getURLName } from "./scripts/content-handler";

getContent().then((contentData) => {
  const root = createRoot(document.querySelector("main"));
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
              <Artifacts />
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
                // <React.StrictMode>
                <ArtifactContents
                  key={artifact.text}
                  title={artifact.title}
                  subtitle={artifact.subtitle}
                  text={artifact.text}
                  year={artifact.year}
                  quarter={artifact.quarter}
                  hasImages={artifact.hasImages}
                  hasEmbed={artifact.hasEmbed}
                  hasLink={artifact.hasLink}
                />
                // </React.StrictMode>
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
