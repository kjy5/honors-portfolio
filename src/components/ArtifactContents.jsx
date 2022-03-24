import '../styles/ArtifactContents.css';

import React from 'react';

export default function ArtifactContents(props) {
    return (
        <div className="artifact-contents" id={props.title}>
            <p>{props.text}</p>
        </div>
    );
}