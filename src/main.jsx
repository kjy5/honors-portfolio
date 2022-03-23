import './styles/index.css';

import App from './components/App';
import {getContentData} from "./scripts/artifacts";
import Graphics from './Graphics';
import ArtifactCard from './components/ArtifactCard';
import React from 'react';
import ReactDOM from 'react-dom';

// Run Graphics
Graphics();

// Get content data and render
getContentData().then(data => {
    // Create artifact cards
    let artifactCardsDOM = data.map((artifact) => {
        return <ArtifactCard key={artifact.title} title={artifact.title} subtitle={artifact.subtitle}/>;
    });

    // Render HTML
    ReactDOM.render(
        <React.StrictMode>
            <div/>
            <App/>
            {artifactCardsDOM}
        </React.StrictMode>,
        document.querySelector('main')
    );
});


