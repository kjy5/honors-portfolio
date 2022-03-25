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
        <div className="ArtifactCard" onClick={() => toggleContents(props.title)}>
            <div className="ArtifactCard__graphics" id={props.title + " card graphics"}/>
            <div className="ArtifactCard__title">
                <h1>{props.title}</h1>
            </div>
            <div className="ArtifactCard__subtitle">
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    );
}