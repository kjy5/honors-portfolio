import '../styles/Artifacts.css'

import ArtifactCard from './ArtifactCard'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * @description Parent component holding Artifact Card and Artifact Contents
 * @param {object} props complete content data
 * @returns {JSX.Element[]} Array of Artifacts
 */
export default function Artifacts (props) {
  const contentData = props.contentData

  // Un-blur background
  document.querySelector('#canvas').classList.remove('blur')

  // Render Artifact cards
  // Hold cards as they are created
  const output = []

  // Year and quarter tracker
  let curYear = -1
  let curQuarter = -1

  // Iterate through content data
  contentData.forEach((artifact) => {
    // Insert year header if necessary
    if (artifact.year !== curYear) {
      curYear = artifact.year
      output.push(
        <div className="Artifacts__year-header" key={`year_${curYear}`}/>
      )
    }

    // Insert quarter header if necessary
    if (artifact.quarter !== curQuarter) {
      curQuarter = artifact.quarter
      output.push(
        <div
          className="Artifacts__quarter-header"
          key={`year_${curYear}_quarter_${curQuarter}`}
          id={`year_${curYear}_quarter_${curQuarter}`}
        />
      )
    }

    // Insert artifact card, contents, and divider
    output.push(
      <ArtifactCard artifact={artifact} key={artifact.title}/>,
      <div key={artifact.subtitle} className="Artifacts__spacers"/>
    )
  })

  // Return artifacts
  return output
}

// Prop validation
Artifacts.propTypes = {
  contentData: PropTypes.any,
}
