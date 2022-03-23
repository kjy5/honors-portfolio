import "../styles/ArtifactCard.css";

import React from 'react';

/**
 * @description - Overview card for an Artifact
 * @returns {JSX.Element} The card
 */
export default function ArtifactCard() {
    return (
        <div className="artifact-card">
            <div className="artifact-card__graphics"/>
            <div className="artifact-card__title">
                <h1>Item Title</h1>
            </div>
            <div className="artifact-card__subtitle">
                <h2>A CSE 143 Assignment</h2>
            </div>
        </div>
    );
}