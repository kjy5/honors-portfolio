import '../styles/ArtifactContents.css';
import React from 'react';
import {embedAssets, imageAssets} from "../scripts/asset-imports";


export default function ArtifactContents(props) {

    return (
        <div className="artifact-contents" id={props.title}>
            <div className={"artifact-images"}>
                {props.hasImages !== "" && imageAssets[props.title].map(imageSrc => <img key={imageSrc}
                                                                                         className="artifact-image"
                                                                                         src={imageSrc}
                                                                                         alt={props.title}/>)}
            </div>
            <div className={"artifact-embed"}>
                {props.hasEmbed !== "" && <iframe className="artifact-iframe"
                                                  src={embedAssets[props.title]}
                                                  frameBorder="0"/>}
            </div>
            <p>{props.text}</p>
        </div>
    );
}