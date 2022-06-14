import "../styles/RichLink.css";
import React, { useEffect, useState } from "react";
import { getLinkAssetMetas } from "../scripts/content-handler";
import PropTypes from "prop-types"; // skipcq: JS-0249

/**
 * @description Rich link component
 * @param {object} props URL of the link
 * @returns {*[]} A rich link
 */
export default function RichLinks(props) {
  const { assetName } = props;

  const [linkMetas, setLinkMetas] = useState([]);

  useEffect(() => {
    getLinkAssetMetas(assetName).then((meta) => setLinkMetas(meta));
  });

  const output = [];

  linkMetas.forEach((meta) => {
    output.push(
      <a
        className="rich-link-card"
        key={meta.title}
        href={meta.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rich-link-image-container">
          <div
            className="rich-link-image"
            style={{ backgroundImage: `url(${meta.image})` }}
          />
        </div>
        <div className="rich-link-card-text">
          <h1 className="rich-link-card-title">{meta.title}</h1>
          <p className="rich-link-card-description">{meta.description}</p>
          <p className="rich-link-href">{meta.url}</p>
        </div>
      </a>
    );
  });

  return output;
}

RichLinks.propTypes = {
  assetName: PropTypes.string.isRequired,
};
