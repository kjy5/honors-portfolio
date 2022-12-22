import '../styles/ArtifactCard.sass'
import { Artifact } from '../scripts/interfaces'

/**
 * Artifact card component. Displays high-level information about an artifact (title, subtitle, 3D graphic).
 * @param props {Artifact} artifact - Artifact object
 * @constructor
 * @return {JSX.Element}
 */
export default function ArtifactCard (props: { artifact: Artifact }): JSX.Element {
  return (
    <div className="artifact-card">
      <div className="artifact-card__graphic-container"/>
      <h1 className="artifact-card__title">{props.artifact.title}</h1>
      <h3 className="artifact-card__subtitle">{props.artifact.subtitle}</h3>
    </div>
  )
}