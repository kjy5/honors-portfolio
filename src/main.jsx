import './styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Graphics from './Graphics'

// Run Graphics
Graphics()

// Render HTML
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.querySelector('main')
)
