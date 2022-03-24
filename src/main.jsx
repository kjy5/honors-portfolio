import './styles/index.css';

import App from './components/App';
import ArtifactCard from "./components/ArtifactCard";
import ArtifactContents from "./components/ArtifactContents";
import {getContentData} from "./scripts/data-manager";
import Graphics from './scripts/graphics';
import React from 'react';
import ReactDOM from 'react-dom';

// Run Graphics
Graphics();

// Get content data and render
getContentData().then(data => {
    // Create artifact cards
    let artifactsDOM = data.map((artifact) => {
        return [
            <ArtifactCard key={artifact.title} title={artifact.title} subtitle={artifact.subtitle}/>,
            <ArtifactContents key={artifact.text} title={artifact.title} text={artifact.text}/>
        ];
    });

    // Render HTML
    ReactDOM.render(
        <React.StrictMode>
            <div/>
            <App/>
            {artifactsDOM}
        </React.StrictMode>,
        document.querySelector('main')
    );
});


