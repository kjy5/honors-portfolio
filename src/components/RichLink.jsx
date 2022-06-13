import '../styles/RichLink.css'

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * @description Rich link component
 * @param {object} props URL of the link
 * @returns {JSX.Element} A rich link
 */
export default function RichLink (props) {
  const { url } = props

  const fetchURL = `https://jsonlink.io/api/extract?url=${url}`

  const [linkData, setLinkData] = useState({});

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setLinkData(data);
      });
  });

  /**
   * @description Safely extracts the image url from the iframely response
   * @returns {string|*} Image url
   */
  const getImageHref = () => {
    try {
      return linkData.images[0]
    } catch (e) {
      return "";
    }
  };

  /**
   * @description Safely extracts the title from the iframely response
   * @returns {string|*} Title with extra whitespaces removed
   */
  const getTitle = () => {
    try {
      return linkData.title.replace(/\s{3,}/g, ' ').trim()
    } catch (e) {
      return "";
    }
  };

  /**
   * @description Safely extracts the description from the Jsonlink response
   * @returns {string|*} Description with extra whitespaces removed
   */
  const getDescription = () => {
    try {
      return linkData.description.replace(/\s{3,}/g, ' ').trim()
    } catch (e) {
      return "";
    }
  };

  return (
    <a
      className="rich-link-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="rich-link-image-container">
        <div
          className="rich-link-image"
          style={{ backgroundImage: `url(${getImageHref()})` }}
        />
      </div>
      <div className="rich-link-card-text">
        <h1 className="rich-link-card-title">{getTitle()}</h1>
        <p className="rich-link-card-description">{getDescription()}</p>
        <p className="rich-link-href">{url}</p>
      </div>
    </a>
  );
}

RichLink.propTypes = {
  url: PropTypes.string.isRequired,
};
