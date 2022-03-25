import '../styles/ArtifactCard.css';

import PropTypes from 'prop-types';
import React, {useCallback} from 'react';

/**
 * @description - Overview card for an Artifact
 * @param {object} props - props passed in from parent component
 * @returns {JSX.Element} The card
 */
export default function ArtifactCard(props) {

    const {title, subtitle} = props;

    const toggleContents = useCallback((id) => () => {
        const contentElement = document.getElementById(id);
        const displayState = contentElement.style.display;
        contentElement.style.display = displayState === 'none' || displayState === "" ? 'grid' : 'none';
    }, []);

    return (
        <div className="ArtifactCard" onClick={toggleContents(title)} onKeyPress={toggleContents(title)} role="button"
             tabIndex="0">
            <div className="ArtifactCard__graphics" id={`${title}_card_graphics`}/>
            <div className="ArtifactCard__title">
                <h1>{title}</h1>
            </div>
            <div className="ArtifactCard__subtitle">
                <h3>{subtitle}</h3>
            </div>
        </div>
    );
}

ArtifactCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};