import "../styles/ArtifactCard.css";

import { getURLName } from "../scripts/content-handler";
import { Link } from "react-router-dom"; // skipcq: JS-0249
import PropTypes from "prop-types";
import React from "react";

/**
 * @description - Overview card for an Artifact
 * @param {object} props - props passed in from parent component
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

      {/* Title */}
      <div className="ArtifactCard__title">
        <h1>{title}</h1>
      </div>

      {/* Subtitle */}
      <div className="ArtifactCard__subtitle">
        <h3>{subtitle}</h3>
      </div>
    </Link>
  );
}

// Prop validation
ArtifactCard.propTypes = {
  artifact: PropTypes.object.isRequired,
};
