import '../styles/ArtifactContents.css';
import React from 'react';
import {embedAssets, imageAssets} from '../scripts/asset-imports';


export default function ArtifactContents(props) {

    return (
        <div className="ArtifactContents" id={props.title}>
            <div className="artifact-images">
                {props.hasImages !== "" && imageAssets[props.title].map(imageSrc => <img key={imageSrc}
                                                                                         className="ArtifactContents__image"
                                                                                         src={imageSrc}
                                                                                         alt={props.title}/>)}
            </div>
            <div className="artifact-embed">
                {props.hasEmbed !== "" && embedAssets[props.title].map(embedSrc => {
                    return [
                        <a className="artifact-embed-backup-link" key={"backup " + embedSrc} href={embedSrc}>
                            External Link for Mobile View
                        </a>,
                        <iframe key={embedSrc}
                                className="ArtifactContents__iframe"
                                src={embedSrc}
                                frameBorder="0"/>
                    ];
                })
                }
            </div>
            <p>{props.text}</p>
        </div>
    );
}