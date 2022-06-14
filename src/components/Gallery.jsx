import "photoswipe/dist/photoswipe.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import "../styles/Gallery.css";
import { getImageAssetMetas, getURLName } from "../scripts/content-handler";
import React, { useEffect, useState } from "react"; // skipcq: JS-0249
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PropTypes from "prop-types";

/**
 * PhotoSwipe power image gallery.
 * @param {object} props
 * @returns {JSX.Element} gallery as a React component
 */
export default function Gallery(props) {
  // Destructure title from props
  const { title } = props;

  // Make title ID compatible
  const idTitle = getURLName(title);

  // Update against meta data
  const [metaData, setMetaData] = useState([]);

  // Initialize the gallery
  useEffect(() => {
    // Load metadata
    getImageAssetMetas(title).then((meta) => setMetaData(meta));

    // Initialize the gallery
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${idTitle}`,
      children: "a",
      padding: { top: 30, right: 70, bottom: 30, left: 70 },
      preloaderDelay: 0,
      pswpModule: () => import("photoswipe"),
    });
    // Add caption plugin
    // noinspection JSUnusedLocalSymbols
    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      type: "auto",
      captionContent: ".pswp-caption-content", // skipcq: JS-0128
    });
    lightbox.init();

    // Clean up gallery
    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="ArtifactContents__Gallery" id={idTitle}>
      {/* Loop through images and thumbnails */}
      {metaData.map((imageMeta) => (
        <a
          key={`${title}_gallery_${imageMeta.name}`}
          href={imageMeta.image}
          data-pswp-width={imageMeta.width}
          data-pswp-height={imageMeta.height}
          target="_blank"
          rel="noreferrer"
        >
          {/* Thumbnail imageMeta */}
          <img
            className="ArtifactContents__Gallery-thumbnail"
            src={imageMeta.thumbnail}
            alt={imageMeta.name}
          />
          {/* Caption */}
          <span className="pswp-caption-content">
            <h2>{imageMeta.name}</h2>
            <br />
            {imageMeta.description}
          </span>
        </a>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
};
