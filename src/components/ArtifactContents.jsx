import '../styles/ArtifactContents.css';
import React from 'react';


export default function ArtifactContents(props) {
    return (
        <div className="artifact-contents" id={props.title}>
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