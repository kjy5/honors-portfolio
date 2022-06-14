import '../styles/NavBar.css'

import React from 'react'

/**
 * @description NavBar component
 * @returns {*[]} JSX elements for the NavBar
 */
export default function NavBar () {

  /**
   * @description Convert year number to string
   * @returns {string} Year string
   */
  const yearToString = (year) => {
    switch (year) {
      case 0:
        return 'Freshman'
      case 1:
        return 'Sophomore'
      case 2:
        return 'Junior'
      case 3:
        return 'Senior'
      default:
        return 'Unknown'
    }
  }

  const navYearElement = (year) => {
    return (
      <div className="NavYear">
        <h2 className="NavYear__title">{yearToString(year)}</h2>
        <a href={`#year_${year}_quarter_0`} className="NavYear__quarter">Fall</a>
        <a href={`#year_${year}_quarter_1`} className="NavYear__quarter">Winter</a>
        <a href={`#year_${year}_quarter_2`} className="NavYear__quarter">Spring</a>
      </div>
    )
  }

  let output = []
  for (let i = 0; i < 4; i++) {
    output.push(navYearElement(i))
  }
  return (
    <div className="NavBar">
      {output}
    </div>
  )
}