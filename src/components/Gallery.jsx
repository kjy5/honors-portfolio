// noinspection JSUnusedGlobalSymbols

import "../styles/Gallery.sass";
import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import PropTypes from "prop-types";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

/**
 * Gallery component, displays a gallery of images
 * @param {object} props - Images to display
 * @constructor
 * @returns {JSX.Element}
 */
export default function Gallery(props) {
  // Extract prop data
  const { images } = props;
  const galleryID = `gallery_${images[0].artifact
    .replaceAll(" ", "-")
    .toLowerCase()}`;

  // Initialize the gallery
  useEffect(() => {
    // Create lightbox
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryID}`,
      children: "a",
      padding: { top: 30, right: 70, bottom: 30, left: 70 },
      preloaderDelay: 0,
      pswpModule: () => import("photoswipe"),
    });

    // Add dynamic caption plugin
    new PhotoSwipeDynamicCaption(lightbox, {
      type: "auto",
      captionContent: ".pswp-caption-content",
    });

    // Start the lightbox
    lightbox.init();

    // Cleanup
    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  // Render
  return (
    <div className={"Gallery"} id={galleryID}>
      {images.map((image) => (
        <a
          key={image.name}
          href={image.image}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          {/* Thumbnail */}
          <img
            className={"Gallery__thumbnail"}
            src={image.thumbnail}
            alt={image.name}
          />

          {/* Caption */}
          <span className={"pswp-caption-content"}>
            <h2>{image.name}</h2>
            <br />
            {image.description}
          </span>
        </a>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      artifact: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
