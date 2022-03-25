import './styles/index.css';

import App from './components/App';
import Artifacts from './components/Artifacts';
import Graphics from './scripts/graphics';
import React from 'react';
import ReactDOM from 'react-dom';

// Run Graphics
Graphics();

// Render HTML
ReactDOM.render(
    <React.StrictMode>
        <div id="top"/>
        <App/>
        <Artifacts/>
    </React.StrictMode>,
    document.querySelector('main')
);



