import '../styles/App.css'

import React from 'react'

/**
 * @description "Website in progress" message
 * @returns {JSX.Element}
 */
export default function InProgress () {
  return (
    <div className="App">
      <p>
        This is my portfolio website! It is currently under active development.
      </p>
      <p>
        Please see my{' '}
        <a href="https://kjy509.wixsite.com/honors-portfolio">
          temporary website
        </a>{' '}
        while I work to complete this one!
      </p>
      <h2>See ya soon!</h2>
    </div>
  );
}
