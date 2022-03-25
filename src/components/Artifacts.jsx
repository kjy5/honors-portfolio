import '../styles/Artifacts.css';

import ArtifactCard from './ArtifactCard';
import ArtifactContents from './ArtifactContents';
import content from '../assets/content.tsv?url';
import {tsv} from 'd3';
import React, {useEffect, useState} from 'react';

export default function Artifacts() {

    // Manage content data
    const [contentData, setContentData] = useState([]);

    // Get content data on load
    useEffect(() => {
        tsv(content).then(data => setContentData(data));
    }, []);

    // Render Artifacts
    let output = [];
    let curYear = -1;
    let curQuarter = -1;
    contentData.forEach(artifact => {
        // Insert year header if necessary
        if (artifact.year !== curYear) {
            curYear = artifact.year;
            output.push(<div className="Artifacts__year-header" key={"year_" + curYear}/>);
        }

        // Insert quarter header if necessary
        if (artifact.quarter !== curQuarter) {
            curQuarter = artifact.quarter;
            output.push(<div className="Artifacts__quarter-header"
                             key={"year_" + curYear + "_quarter_" + curQuarter}/>);
        }

        // Insert artifact card, contents, and divider
        output.push(
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
            />,
            <div key={artifact.subtitle} className="Artifacts__spacers"/>
        );
    });

    return output;
// return contentData.map(artifact => {
//     return [
//         <ArtifactCard key={artifact.title}
//                       title={artifact.title}
//                       subtitle={artifact.subtitle}
//                       graphicsName={artifact.graphicsName}
//         />,
//         <ArtifactContents key={artifact.text}
//                           title={artifact.title}
//                           text={artifact.text}
//                           year={artifact.year}
//                           quarter={artifact.quarter}
//                           hasImages={artifact.hasImages}
//                           hasEmbed={artifact.hasEmbed}
//         />,
//         <div key={artifact.subtitle} className="artifact-spacers"/>
//     ];
// });
}