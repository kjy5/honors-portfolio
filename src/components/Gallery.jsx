import "photoswipe/dist/photoswipe.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import "../styles/Gallery.css";
import { imageAssetMetas, imageAssets } from "../scripts/asset-imports";
import React, { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
// noinspection ES6CheckImport
import { tsv } from "d3";

export default function Gallery(props) {
  const { title } = props;
  const idTitle = title.replace(/\s/g, "_");

  const [metaData, setMetaData] = useState([]);

  const images = imageAssets[title];

  // Initialize the gallery
  useEffect(() => {
    tsv(imageAssetMetas[title]).then((meta) => setMetaData(meta));

    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${idTitle}`,
      children: "a",
      padding: { top: 30, right: 70, bottom: 30, left: 70 },
      preloaderDelay: 0,
      pswpModule: () => import("photoswipe"),
    });
    // noinspection JSUnusedLocalSymbols
    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
      type: "auto",
      captionContent: ".pswp-caption-content",
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="ArtifactContents__Gallery" id={idTitle}>
      {images.map((image, index) => (
        <a
          key={`${title}_gallery_${index}`}
          href={image}
          data-pswp-width={metaData[index]?.width}
          data-pswp-height={metaData[index]?.height}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="ArtifactContents__Gallery-thumbnail"
            src={image}
            alt={metaData[index]?.name}
          />
          <span className="pswp-caption-content">
            <h2>{metaData[index]?.name}</h2>
            <br />
            {metaData[index]?.description}
          </span>
        </a>
      ))}
    </div>
  );
}
