import './styles/App.css'

import React from 'react'

/**
 * Website base component; where all other components are composed.
 * @returns {JSX.Element}
 */
function App() {

    return (
        <div className="App">
            <p>This is my portfolio website! It is currently under active development.</p>
            <p>Please see my <a href="https://kjy509.wixsite.com/honors-portfolio">temporary website</a> while I work
                to complete this one!</p>
            <h2>See ya soon!</h2>
        </div>
    )
}

export default App
