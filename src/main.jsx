import './styles/index.css'

import App from './App'
import Graphics from './Graphics'
import React from 'react'
import ReactDOM from 'react-dom'

// Run Graphics
Graphics()

// Render HTML
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.querySelector('main')
)
