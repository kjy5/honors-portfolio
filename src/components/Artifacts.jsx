import '../styles/Artifacts.css'

import React, { useEffect, useState } from 'react'
import ArtifactCard from './ArtifactCard'
import { getContent } from '../scripts/content-handler'

/**
 * @description Parent component holding Artifact Card and Artifact Contents
 * @returns {JSX.Element[]} Array of Artifacts
 * @constructor
 */
export default function Artifacts () {
  // Update against new content data
  const [contentData, setContentData] = useState([])

  // Un-blur background
  document.querySelector('#canvas').classList.remove('blur')

  // Get content data
  useEffect(() => {
    // Get data
    getContent().then((data) => {
      setContentData(data)
    })
  }, [])

  // Render Artifact cards
  // Hold cards as they are created
  const output = [];

  // Year and quarter tracker
  let curYear = -1;
  let curQuarter = -1;

  // Iterate through content data
  contentData.forEach((artifact) => {
    // Insert year header if necessary
    if (artifact.year !== curYear) {
      curYear = artifact.year;
      output.push(
        <div className="Artifacts__year-header" key={`year_${curYear}`} />
      );
    }

    // Insert quarter header if necessary
    if (artifact.quarter !== curQuarter) {
      curQuarter = artifact.quarter;
      output.push(
        <div
          className="Artifacts__quarter-header"
          key={`year_${curYear}_quarter_${curQuarter}`}
          id={`year_${curYear}_quarter_${curQuarter}`}
        />
      );
    }

    // Insert artifact card, contents, and divider
    output.push(
      <ArtifactCard
        key={artifact.title}
        title={artifact.title}
        subtitle={artifact.subtitle}
        graphicsName={artifact.graphicsName}
      />,
      <div key={artifact.subtitle} className="Artifacts__spacers" />
    );
  });

  // Return artifacts
  return output;
}
