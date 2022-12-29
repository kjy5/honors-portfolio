import '../styles/ArtifactCard.sass'
import { ArtifactData } from '../scripts/interfaces'
import Graphics from '../scripts/graphics'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

/**
 * ArtifactPage card component. Displays high-level information about an artifact (title, subtitle, 3D graphic).
 * @param {{artifact: ArtifactData}} props - Artifact to display
 * @constructor
 * @return {JSX.Element}
 */
export default function ArtifactCard(props: {
  artifact: ArtifactData;
}): JSX.Element {
  // Extract props
  const { id, title, subtitle } = props.artifact;

  useEffect(() => {
    // Render graphics
    Graphics.makeScene(document.getElementById(id) as HTMLElement);
  }, []);

  // Render
  return (
    /* skipcq: JS-0394 */
    <NavLink to={`/honors-portfolio/${id}`} className="artifact-card">
      <div className="artifact-card__graphic-container" id={id} />
      <h1 className="artifact-card__title">{title}</h1>
      <h3 className="artifact-card__subtitle">{subtitle}</h3>
    </NavLink>
  );
}
