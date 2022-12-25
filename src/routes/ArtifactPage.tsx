import "../styles/ArtifactPage.sass";
import { ArtifactData, EmbedData, LinkData } from "../scripts/interfaces";
import { NavLink, useLoaderData } from "react-router-dom";
import React, { Fragment } from "react";
import Gallery from "../components/Gallery";
import RichLink from "../components/RichLink";

/**
 * Artifact page, displays artifact information including text, images, and embedded media
 * @constructor
 * @returns {JSX.Element}
 */
export default function ArtifactPage(): JSX.Element {
  // Get and extract data
  const artifact = useLoaderData() as ArtifactData;
  const quarterToString = (): string => {
    switch (artifact.quarter) {
      case 0:
        return "Fall";
      case 1:
        return "Winter";
      case 2:
        return "Spring";
      default:
        return "Summer";
    }
  };
  const yearToString = (): string => {
    switch (artifact.year) {
      case 0:
        return "Freshman";
      case 1:
        return "Sophomore";
      case 2:
        return "Junior";
      default:
        return "Senior";
    }
  };

  // Force scroll to top
  window.scroll(0, 0);

  // Render
  return (
    <div className={"ArtifactPage"}>
      {/* Back button */}
      {/* skipcq: JS-0394 */}
      <NavLink
        className={"ArtifactPage__return"}
        to={"/honors-portfolio"}
        tabIndex={0}
        role="button"
      >
        &larr; Return to Kenneth&apos;s Honors Portfolio
      </NavLink>

      {/* 3D graphics element */}
      <div className="ArtifactPage__graphics" />

      {/* Artifact content */}
      <div className={"ArtifactPage__content"}>
        <div className={"ArtifactPage__content--header"}>
          {/* Title and subtitle */}
          <div className="ArtifactPage__title">
            <h1>{artifact.title}</h1>
            <h2>{artifact.subtitle}</h2>
          </div>

          {/* Year and quarter */}
          <div className="ArtifactPage__date">
            <h3>
              Quarter: {yearToString()} {quarterToString()}
            </h3>
          </div>

          {/* External Link */}
          {artifact.links && (
            <div className="ArtifactPage__links">
              {artifact.links.map((link: LinkData) => (
                <RichLink key={link.url} linkData={link} />
              ))}
            </div>
          )}
        </div>
        {/* Text */}
        <p className="ArtifactPage__text">{artifact.text}</p>
      </div>

      {/* Images */}
      {artifact.images && <Gallery images={artifact.images} />}

      {/* Embedded items */}
      {artifact.embeds && (
        <div className="ArtifactPage__embeds">
          {artifact.embeds.map((embed: EmbedData) => (
            <Fragment key={embed.url}>
              <a
                className="ArtifactPage__-embed-backup-link"
                key={`backup_${embed.url}`}
                href={embed.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here if there is a problem viewing the embedded item
              </a>
              <iframe
                key={`iframe_${embed.url}`}
                className="ArtifactPage__iframe"
                src={embed.url}
                title={embed.artifact}
              />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
