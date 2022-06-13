import '../styles/ArtifactContents.css'
import { embedAssets, linkAssets } from '../scripts/asset-imports'
import { getURLName } from '../scripts/content-handler'
import Gallery from './Gallery'
import React from 'react'

/**
 * Contents of an artifact including images, embedded items, and text
 * @param {object} props content data for a single artifact
 * @returns {JSX.Element} Artifact contents component
 */
export default function ArtifactContents (props) {
  // Destructure props
  const { artifact } = props
  const { title, subtitle, hasEmbed, hasImages, hasLink, text, year, quarter } =
    artifact

  const quarterToString = () => {
    switch (quarter) {
      case '0':
        return 'Fall'
      case '1':
        return 'Winter'
      case '2':
        return 'Spring'
      case '3':
        return 'Summer'
      default:
        return ''
    }
  }

  const yearToString = () => {
    switch (year) {
      case '0':
        return 'Freshman'
      case '1':
        return 'Sophomore'
      case '2':
        return 'Junior'
      case '3':
        return 'Senior'
      default:
        return ''
    }
  }

  // Blur canvas background
  document.querySelector('#canvas').classList.add('blur')

  // Back button functionality
  const backButtonCallback = React.useCallback(() => history.back(), [])

  return (
    <div className="ArtifactContents" id={title}>
      {/* Back button */}
      <button className="ArtifactCard__return" onClick={backButtonCallback} type="button">
        Return to Kenneth&apos;s Honors Portfolio
      </button>

      {/* 3D graphics element */}
      <div className="ArtifactCard__graphics" id={getURLName(title)}/>

      {/* Title and subtitle */}
      <div className="ArtifactContents__title"><h1>{title}</h1></div>
      <div className="ArtifactContents__subtitle"><h2>{subtitle}</h2></div>

      {/* Year and quarter */}
      <div className="ArtifactContents__date">
        {yearToString()} {quarterToString()}
      </div>

      {/* Text */}
      <p className="ArtifactContents__text">{text}</p>

      {/* Images, use Gallery if there are images */}
      {hasImages !== '' &&
        <div className="ArtifactContents__images">
          <Gallery title={title}/>
        </div>
      }


      {/* External Link */}
      {hasLink !== '' &&
        <div className="ArtifactContents__external-links">
          {linkAssets[title].map((linkSrc) => {
            return <a key={linkSrc} href={linkSrc}>{linkSrc}</a>
          })}
        </div>
      }


      {/* Embedded items */}
      {hasEmbed !== '' &&
        <div className="ArtifactContents__embeds">
          {embedAssets[title].map((embedSrc) => {
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
            ]
          })}
        </div>
      }
    </div>
  )
}
