import '../styles/Artifacts.css'

import ArtifactCard from './ArtifactCard'
import { insertText } from '../scripts/graphics'
import { quarterToString, yearToString } from '../scripts/content-handler'
import React, { useEffect } from 'react'

/**
 * @description Parent component holding Artifact Card and Artifact Contents
 * @param {object} props complete content data
 * @returns {JSX.Element[]} Array of Artifacts
 */
export default function Artifacts (props) {
  const contentData = props.contentData

  // Un-blur background
  document.querySelector('#canvas').classList.remove('blur')

  useEffect(() => {
    for (let year = 0; year < 1; year++) {
      const yearDiv = document.querySelector(`#year_${year}`)
      insertText(
        yearToString(year),
        window.innerWidth / 2500,
        0,
        yearDiv.offsetTop + yearDiv.offsetHeight
      )
      for (let quarter = 0; quarter < 3; quarter++) {
        const quarterDiv = document.querySelector(`#year_${year}_quarter_${quarter}`)
        insertText(
          quarterToString(quarter),
          window.innerWidth / 3000,
          0,
          quarterDiv.offsetTop + quarterDiv.offsetHeight
        )
      }
    }
  }, [])

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
        <div
          className="Artifacts__year-header"
          key={`year_${curYear}`}
          id={`year_${curYear}`}
        />
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
      <ArtifactCard artifact={artifact} key={artifact.title}/>
    )
  })

  // Return artifacts
  return output
}
