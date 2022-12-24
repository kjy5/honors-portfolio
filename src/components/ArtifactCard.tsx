import '../styles/ArtifactCard.sass'
import { Artifact } from '../scripts/interfaces'
import { Link } from 'react-router-dom'

/**
 * ArtifactPage card component. Displays high-level information about an artifact (title, subtitle, 3D graphic).
 * @param props {Artifact} Artifact to display
 * @constructor
 * @return {JSX.Element}
 */
export default function ArtifactCard(props: {
  artifact: Artifact;
}): JSX.Element {
  return (
    <Link
      to={`/honors-portfolio/${props.artifact.id}`}
      className="artifact-card"
    >
      <div className="artifact-card__graphic-container" />
      <h1 className="artifact-card__title">{props.artifact.title}</h1>
      <h3 className="artifact-card__subtitle">{props.artifact.subtitle}</h3>
    </Link>
  );
}
