import ArtifactCard from "./ArtifactCard";
import ArtifactContents from "./ArtifactContents";
import {getContentData} from "../scripts/data-manager";
import React, {useEffect, useState} from "react";

export default function Artifacts() {

    // Manage content data
    const [contentData, setContentData] = useState([]);

    // Get content data on load
    useEffect(() => {
        getContentData().then(data => setContentData(data));
    }, []);

    // Render Artifacts
    return contentData.map(artifact => {
        return [
            <ArtifactCard key={artifact.title}
                          title={artifact.title}
                          subtitle={artifact.subtitle}
                          graphicsName={artifact.graphicsName}
            />,
            <ArtifactContents key={artifact.text}
                              title={artifact.title}
                              text={artifact.text}
                              year={artifact.year}
                              quarter={artifact.quarter}
                              hasImages={artifact.hasImages}
                              hasEmbed={artifact.hasEmbed}
            />
        ];
    });
}