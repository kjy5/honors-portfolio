import '../styles/ArtifactContents.css';
import React, {useEffect, useState} from 'react';
import {importImages} from "../scripts/data-manager";


export default function ArtifactContents(props) {

    // Media srcs
    const [imageSrcs, setImageSrcs] = useState([]);
    // const [embedSrcs, setEmbedSrcs] = useState([]);

    // Get srcs on load
    useEffect(() => {
        // Get image srcs
        if (props.imageCount !== "") {
            const sourceBase = "../src/assets/images/" + props.year + "/" + props.quarter + "/" + props.title + "/";
            importImages(sourceBase, props.imageCount).then(srcs => setImageSrcs(srcs));
        }

        // Get embed srcs
    }, []);


    return (
        <div className="artifact-contents" id={props.title}>
            <div className={"artifact-images"}>
                {imageSrcs.map(imageSrc => <img key={imageSrc} className="artifact-image" src={imageSrc}
                                                alt={props.title}/>)}
            </div>
            <p>{props.text}</p>
        </div>
    );
    // Get images
    // if (props.imageCount !== "") {
    //     const sourceBase = "../assets/images/" + props.year + "/" + props.quarter + "/" + props.title + "/";
    //     importImages(sourceBase, props.imageCount).then(imageSrcs => {
    //         return (
    //             <div className="artifact-contents">
    //                 <div className={"artifact-images"}>
    //                     {imageSrcs.map(imageSrc => <img className="artifact-image" src={imageSrc} alt={props.title}/>)}
    //                 </div>
    //                 <p>{props.text}</p>
    //             </div>
    //         );
    //     });
    // } else {
    //     return (
    //         <div className="artifact-contents">
    //             <p>{props.text}</p>
    //         </div>
    //     );
    // }
}