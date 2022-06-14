import '../styles/NavBar.css'

import React from 'react'

/**
 * @description NavBar component
 * @returns {JSX.Element} JSX elements for the NavBar
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

  /**
   * @description Year nav bar item
   * @param year {number} Year number
   * @param disabled {boolean} Whether the year is disabled
   * @returns {JSX.Element} JSX element for the year nav bar item
   */
  const navYearElement = (year, disabled) => {
    return (
      <div className={`NavYear ${disabled && 'disabled'}`} key={year}>
        <h2 className="NavYear__title">{yearToString(year)}</h2>
        <a href={`#year_${year}_quarter_0`} className="NavYear__quarter">Fall</a>
        <a href={`#year_${year}_quarter_1`} className="NavYear__quarter">Winter</a>
        <a href={`#year_${year}_quarter_2`} className="NavYear__quarter">Spring</a>
      </div>
    )
  }

  let output = []
  output.push(navYearElement(0, false))
  for (let i = 1; i < 4; i++) {
    output.push(navYearElement(i, true))
  }
  return (
    <div className="NavBar">
      {output}
    </div>
  )
}