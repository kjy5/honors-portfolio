import { ArtifactData, EmbedData, LinkData } from '../scripts/interfaces'
import { Link, useLoaderData } from 'react-router-dom'
import React, { Fragment } from 'react'

/**
 * Artifact page, displays artifact information including text, images, and embedded media
 * @constructor
 * @returns {JSX.Element}
 */
export default function ArtifactPage(): JSX.Element {
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
  return (
    <div className={"ArtifactPage"}>
      {/* Back button */}
      <Link
        className="ArtifactPage__back-button"
        to={"/honors-portfolio"}
        tabIndex={0}
        role="button"
      >
        &larr; Return to Kenneth&apos;s Honors Portfolio
      </Link>

      {/* 3D graphics element */}
      <div className="ArtifactPage__graphics" />

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

      {/* Text */}
      <p className="ArtifactPage__text">{artifact.text}</p>

      {/* External Link */}
      {artifact.links && (
        <div className="ArtifactPage__external-links">
          {artifact.links.map((link: LinkData) => (
            <p>Link: {link.url}</p>
          ))}
        </div>
      )}

      {/* Images */}
      {artifact.images && (
        <div className="ArtifactPage__images">
          <p>Images</p>
        </div>
      )}

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
