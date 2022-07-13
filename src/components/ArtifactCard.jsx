import "../styles/ArtifactCard.css";

import { getURLName } from "../scripts/content-handler";
import { Link } from "react-router-dom"; // skipcq: JS-0249
import React from "react";

/**
 * @description Overview card for an Artifact
 * @param {object} props props passed in from parent component
 * @returns {JSX.Element} The card
 */
export default function ArtifactCard(props) {
  // Destructure props
  const { artifact } = props;
  const { title, subtitle } = artifact;

  // Generate URL from title
  const urlName = getURLName(title);

  return (
    <Link
      className="ArtifactCard" // skipcq: JS-0394
      to={`/honors-portfolio/${urlName}`}
      tabIndex="0"
    >
      {/* 3D graphics element */}
      <div className="ArtifactCard__graphics" id={urlName} />

      <div className="ArtifactCard__text">
        <h1 className="ArtifactCard__title">{title}</h1>
        <h3 className="ArtifactCard__subtitle">{subtitle}</h3>
      </div>
    </Link>
  );
}
