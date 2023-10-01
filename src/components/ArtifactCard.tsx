import "../styles/ArtifactCard.sass";
import { ArtifactData } from "../scripts/interfaces";
import { NavLink } from "react-router-dom";
import { ReactElement } from "react";

/**
 * ArtifactPage card component. Displays high-level information about an artifact (title, subtitle, 3D graphic).
 * @param {{artifact: ArtifactData}} props - Artifact to display
 * @constructor
 * @return {ReactElement}
 */
export default function ArtifactCard(props: {
  artifact: ArtifactData;
}): ReactElement {
  // Extract props
  const { id, title, subtitle } = props.artifact;

  // Render
  return (
    /* skipcq: JS-0394 */
    <NavLink to={`/${id}`} className="artifact-card">
      <div className="artifact-card__graphic-container" id={id} />
      <h1 className="artifact-card__title">{title}</h1>
      <h3 className="artifact-card__subtitle">{subtitle}</h3>
    </NavLink>
  );
}
