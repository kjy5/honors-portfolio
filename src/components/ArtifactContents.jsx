import "../styles/ArtifactContents.css";
import { embedAssets } from "../scripts/asset-imports";
import Gallery from "./Gallery";
import PropTypes from "prop-types";
import React from "react";

/**
 * Contents of an artifact including images, embedded items, and text
 * @param {object} props
 * @returns {JSX.Element} Artifact contents component
 */
export default function ArtifactContents(props) {
  // Destructure props
  const { title, hasEmbed, hasImages, text } = props;

  return (
    <div className="ArtifactContents" id={title}>
      {/* Images, use Gallery if there are images */}
      <div className="ArtifactContents__images">
        {hasImages !== "" && <Gallery title={title} />}
      </div>
      {/* Embedded items */}
      <div className="ArtifactContents__embeds">
        {hasEmbed !== "" &&
          embedAssets[title].map((embedSrc) => {
            // Provide fallback external link and iframe
            return [
              <a
                className="artifact-embed-backup-link"
                key={`backup_${embedSrc}`}
                href={embedSrc}
              >
                External Link for Mobile View
              </a>,
              <iframe
                key={embedSrc}
                className="ArtifactContents__iframe"
                src={embedSrc}
                frameBorder="0"
                title={title}
              />,
            ];
          })}
      </div>
      <p>{text}</p>
    </div>
  );
}

// Prop validation
ArtifactContents.propTypes = {
  title: PropTypes.string.isRequired,
  hasEmbed: PropTypes.string.isRequired,
  hasImages: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
