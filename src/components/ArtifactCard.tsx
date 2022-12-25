import '../styles/ArtifactCard.sass'
import { ArtifactData } from '../scripts/interfaces'
import { Link } from 'react-router-dom'

/**
 * ArtifactPage card component. Displays high-level information about an artifact (title, subtitle, 3D graphic).
 * @param props {ArtifactData} Artifact to display
 * @constructor
 * @return {JSX.Element}
 */
export default function ArtifactCard(props: {
  artifact: ArtifactData;
}): JSX.Element {
  // Extract props
  const {id, title, subtitle} = props.artifact;

  // Render
  return (
    <Link
      to={`/honors-portfolio/${id}`}
      className="artifact-card"
    >
      <div className="artifact-card__graphic-container" />
      <h1 className="artifact-card__title">{title}</h1>
      <h3 className="artifact-card__subtitle">{subtitle}</h3>
    </Link>
  );
}
