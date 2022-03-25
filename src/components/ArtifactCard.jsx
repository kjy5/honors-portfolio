import '../styles/ArtifactCard.css';

import React from 'react';

function toggleContents(id) {
    const contentElement = document.getElementById(id);
    const displayState = contentElement.style.display;
    contentElement.style.display = displayState === 'none' || displayState === "" ? 'grid' : 'none';
}

/**
 * @description - Overview card for an Artifact
 * @param {object} props - props passed in from parent component
 * @returns {JSX.Element} The card
 */
export default function ArtifactCard(props) {
    return (
        <div className="artifact-card" onClick={() => toggleContents(props.title)}>
            <div className="artifact-card__graphics"/>
            <div className="artifact-card__title">
                <h1>{props.title}</h1>
            </div>
            <div className="artifact-card__subtitle">
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    );
}