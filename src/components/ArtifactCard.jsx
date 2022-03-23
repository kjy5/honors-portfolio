import "../styles/ArtifactCard.css";

import React from 'react';

/**
 * @description - Overview card for an Artifact
 * @param {object} props - props passed in from parent component
 * @returns {JSX.Element} The card
 */
export default function ArtifactCard(props) {
    return (
        <div className="artifact-card">
            <div className="artifact-card__graphics"/>
            <div className="artifact-card__title">
                <h1>{props.title}</h1>
            </div>
            <div className="artifact-card__subtitle">
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    );
}