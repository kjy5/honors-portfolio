import "./styles/index.sass";
import { Artifact } from "./scripts/interfaces";
import ComingSoon from "./components/ComingSoon";
import ParseData from "./scripts/parse-data";
import React from "react";
import ReactDOM from "react-dom/client";
import Year from "./components/Year";

// Parse data and return as an array of Artifact objects
const artifacts: Artifact[] = ParseData();

// Compute year set (get unique years)
const years: Set<number> = new Set();
artifacts.forEach((artifact: Artifact) => {
  years.add(artifact.year);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ComingSoon />

    {/* Artifacts */}
    {Array.from(years).map((year: number) => (
      <Year
        key={year}
        filteredArtifacts={artifacts.filter(
          (artifact: Artifact) => artifact.year === year
        )}
      />
    ))}
  </React.StrictMode>
);
