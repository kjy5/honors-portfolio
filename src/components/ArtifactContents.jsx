import '../styles/ArtifactContents.css';

import React from 'react';

export default function ArtifactContents(props) {
    return (
        <div className="artifact-contents">
            <p>{props.text}</p>
        </div>
    );
}