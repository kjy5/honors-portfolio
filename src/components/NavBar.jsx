import '../styles/NavBar.css'
import React, { useEffect } from 'react'

/**
 * @description NavBar component
 * @returns {JSX.Element} JSX elements for the NavBar
 */
export default function NavBar () {
  useEffect(() => {
    // Set scroll
    const scrollToTopButton = document.querySelector('#scroll_to_top_button')
    window.onscroll = () => {
      if (window.scrollY > 350) {
        scrollToTopButton.classList.add('show')
      } else {
        scrollToTopButton.classList.remove('show')
      }
    }
  })

  /**
   * @description Function to scroll to the top of the page
   * @type {(function(): void)|*}
   */
  const scrollToTop = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

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
        return 'Graduate'
    }
  }

  const scrollToLocation = React.useCallback(
    (year, quarter) => () => {
      window.scrollTo({
        top: document.querySelector(`#year_${year}_quarter_${quarter}`)
          .offsetTop,
        behavior: 'smooth'
      })
    },
    []
  )

  /**
   * @description Year nav bar item
   * @param year {number} Year number
   * @param disabled {boolean} Whether the year is disabled
   * @returns {JSX.Element} JSX element for the year nav bar item
   */
  const navYearElement = (year, disabled) => {
    return (
      <div className={`NavYear ${disabled && 'disabled'}`} key={year}>
        <h2 className='NavYear__title'>{yearToString(year)}</h2>
        <div
          className='NavYear__quarter'
          onClick={scrollToLocation(year, 0)}
          onKeyDown={scrollToLocation(year, 0)}
          tabIndex='0'
          role='button'
        >
          Fall
        </div>
        <div
          className='NavYear__quarter'
          onClick={scrollToLocation(year, 1)}
          onKeyDown={scrollToLocation(year, 1)}
          tabIndex='0'
          role='button'
        >
          Winter
        </div>
        <div
          className='NavYear__quarter'
          onClick={scrollToLocation(year, 2)}
          onKeyDown={scrollToLocation(year, 2)}
          tabIndex='0'
          role='button'
        >
          Spring
        </div>
      </div>
    )
  }

  const output = []
  output.push(navYearElement(0, false))
  for (let i = 1; i < 4; i++) {
    output.push(navYearElement(i, true))
  }
  return (
    <div className='NavBar'>
      {/* Nav items */}
      {output}

      {/* Scroll to top button */}
      <button
        className='NavBar__back-to-top'
        id='scroll_to_top_button'
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
        tabIndex='0'
        type='button'
      >
        &#8613;
      </button>
    </div>
  )
}
