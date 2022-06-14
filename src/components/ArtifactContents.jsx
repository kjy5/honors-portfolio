import "../styles/ArtifactContents.css";
import { embedAssets } from "../scripts/asset-imports";
import Gallery from "./Gallery"; // skipcq: JS-0249
import { getURLName } from "../scripts/content-handler";
import React from "react"; // skipcq: JS-0249
import RichLinks from "./RichLinks";

/**
 * Contents of an artifact including images, embedded items, and text
 * @param {object} props content data for a single artifact
 * @returns {JSX.Element} Artifact contents component
 */
export default function ArtifactContents(props) {
  // Destructure props
  const { artifact } = props;
  const { title, subtitle, hasEmbed, hasImages, hasLink, text, year, quarter } =
    artifact;

  /**
   * @description Convert a quarter number to a string
   * @returns {string} Quarter string
   */
  const quarterToString = () => {
    switch (quarter) {
      case "0":
        return "Fall";
      case "1":
        return "Winter";
      case "2":
        return "Spring";
      case "3":
        return "Summer";
      default:
        return "";
    }
  };

  /**
   * @description Convert a year number to a string
   * @returns {string} Year string
   */
  const yearToString = () => {
    switch (year) {
      case "0":
        return "Freshman";
      case "1":
        return "Sophomore";
      case "2":
        return "Junior";
      case "3":
        return "Senior";
      default:
        return "";
    }
  };

  // Blur canvas background
  document.querySelector("#canvas").classList.add("blur");

  // Ensure window is scrolled to top
  window.scroll(0, 0);

  // Back button functionality
  const backButtonCallback = React.useCallback(() => history.back(), []);

  return (
    <div className="ArtifactContents" id={title}>
      {/* Back button */}
      <div
        className="ArtifactContents__return"
        onClick={backButtonCallback}
        onKeyDown={backButtonCallback}
        tabIndex="0"
        role="button"
      >
        &larr; Return to Kenneth&apos;s Honors Portfolio
      </div>

      {/* 3D graphics element */}
      <div className="ArtifactContents__graphics" id={getURLName(title)} />

      {/* Title and subtitle */}
      <div className="ArtifactContents__title">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      {/* Year and quarter */}
      <div className="ArtifactContents__date">
        <h3>
          Quarter: {yearToString()} {quarterToString()}
        </h3>
      </div>

      {/* Text */}
      <p className="ArtifactContents__text">{text}</p>

      {/* External Link */}
      {hasLink !== "" && (
        <div className="ArtifactContents__external-links">
          <RichLinks assetName={title} />
        </div>
      )}

      {/* Images, use Gallery if there are images */}
      {hasImages !== "" && (
        <div className="ArtifactContents__images">
          <Gallery title={title} />
        </div>
      )}

      {/* Embedded items */}
      {hasEmbed !== "" && (
        <div className="ArtifactContents__embeds">
          {embedAssets[title].map((embedSrc) => {
            // Provide fallback external link and iframe
            return [
              <a
                className="artifact-embed-backup-link"
                key={`backup_${embedSrc}`}
                href={embedSrc}
                target="_blank"
                rel="noopener noreferrer"
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
      )}
    </div>
  );
}
