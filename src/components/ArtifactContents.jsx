import "../styles/ArtifactContents.css";
import { embedAssets, linkAssets } from "../scripts/asset-imports";
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
  const { title, subtitle, hasEmbed, hasImages, hasLink, text, year, quarter } =
    props;

  // Blur canvas background
  document.querySelector("#canvas").style.filter = "blur(50px)";

  // Back button functionality
  const backButtonCallback = React.useCallback(() => history.back(), []);

  return (
    <div className="ArtifactContents" id={title}>
      {/* Back button */}
      <button onClick={backButtonCallback} type="button">
        Return to Kenneth&apos;s Honors Portfolio
      </button>

      {/* Title and subtitle */}
      <div className="ArtifactContents__title">{title}</div>
      <div className="ArtifactContents__subtitle">{subtitle}</div>

      {/* Year and quarter */}
      <div className="ArtifactContents__date">
        {quarter} {year}
      </div>

      {/* Images, use Gallery if there are images */}
      <div className="ArtifactContents__images">
        {hasImages !== "" && <Gallery title={title} />}
      </div>

      {/* External Link */}
      <div className="ArtifactContents__external-link">
        {hasLink !== "" &&
          linkAssets[title].map((linkSrc) => {
            return [
              <a key={linkSrc} href={linkSrc}>
                {linkSrc}
              </a>,
              <br key={`br_${linkSrc}`} />,
            ];
          })}
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
                Click here if there is a problem viewing the embedded item
              </a>,
              <iframe
                key={embedSrc}
                className="ArtifactContents__iframe"
                src={embedSrc}
                title={title}
              />,
            ];
          })}
      </div>

      {/* Text */}
      <p className="ArtifactContents__text">{text}</p>
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
