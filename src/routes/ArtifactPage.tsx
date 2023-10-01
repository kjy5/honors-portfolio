import '../styles/ArtifactPage.sass'
import { ArtifactData, EmbedData, LinkData } from '../scripts/interfaces'
import { Fragment, ReactElement } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import Gallery from '../components/Gallery'
import RichLink from '../components/RichLink'

/**
 * Artifact header, displays artifact title, subtitle, date, and links
 * @param {{artifact: ArtifactData}} props - Artifact data
 * @constructor
 * @returns {ReactElement}
 */
function ArtifactHeader(props: { artifact: ArtifactData }): ReactElement {
  const { year, quarter, title, subtitle, links } = props.artifact;

  /**
   * Convert quarter number encoding to readable string
   */
  const quarterToString = (): string => {
    switch (quarter) {
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

  /**
   * Convert year number encoding to readable string
   */
  const yearToString = (): string => {
    switch (year) {
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
    <div className={"ArtifactPage__content--header"}>
      {/* Title and subtitle */}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      {/* Year and quarter */}
      <h3>
        Quarter: {yearToString()} {quarterToString()}
      </h3>

      {/* External Link */}
      {links?.map((link: LinkData) => (
        <RichLink key={link.url} linkData={link} />
      ))}
    </div>
  );
}

/**
 * Artifact page, displays artifact information including text, images, and embedded media
 * @constructor
 * @returns {ReactElement}
 */
export default function ArtifactPage(): ReactElement {
  // Get and extract data
  const artifact = useLoaderData() as ArtifactData;

  // Force scroll to top
  window.scroll(0, 0);

  // Render
  return (
    <div className={"ArtifactPage"}>
      {/* Blur layer */}
      <div className={"ArtifactPage__blur"} />

      {/* Back button */}
      {/* skipcq: JS-0394 */}
      <NavLink
        className={"ArtifactPage__return"}
        to={"/"}
        tabIndex={0}
        role="button"
      >
        &larr; Return to Kenneth&apos;s Honors Portfolio
      </NavLink>

      {/* 3D graphics element */}
      <div className="ArtifactPage__graphics" />

      {/* Artifact content */}
      <div className={"ArtifactPage__content"}>
        <ArtifactHeader artifact={artifact} />
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
                // skipcq: JS-D010
                key={`iframe_${embed.url}`}
                className="ArtifactPage__iframe"
                src={embed.url}
                title={embed.artifact}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
