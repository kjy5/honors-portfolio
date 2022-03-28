import "../styles/ArtifactCard.css";

import PropTypes from "prop-types";
import React, { useCallback } from "react";

/**
 * @description - Overview card for an Artifact
 * @param {object} props - props passed in from parent component
 * @returns {JSX.Element} The card
 */
export default function ArtifactCard(props) {
  // Destructure props
  const { title, subtitle } = props;

  // Make title ID compatible
  const idTitle = title.replace(/\s/g, "_");

  // Hide/show Artifact Contents on click
  const toggleContents = useCallback(
    (id) => () => {
      // Get contents element and display property
      const contentElement = document.getElementById(id);
      const displayState = contentElement.style.display;

      // Toggle between "none" and "grid"
      contentElement.style.display =
        displayState === "none" || displayState === "" ? "grid" : "none";
    },
    []
  );

  return (
    <div
      className="ArtifactCard"
      onClick={toggleContents(title)}
      onKeyPress={toggleContents(title)}
      role="button"
      tabIndex="0"
    >
      {/* 3D graphics element */}
      <div className="ArtifactCard__graphics" id={idTitle} />

      {/* Title */}
      <div className="ArtifactCard__title">
        <h1>{title}</h1>
      </div>

      {/* Subtitle */}
      <div className="ArtifactCard__subtitle">
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

// Prop validation
ArtifactCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
