import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Graphics from './Graphics'
import './styles/index.css'

// Run Graphics
Graphics()

// Render HTML
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.querySelector('main')
)
