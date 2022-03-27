import 'photoswipe/dist/photoswipe.css'
import '../styles/Gallery.css'
import { imageAssetMetas, imageAssets } from '../scripts/asset-imports'
import React, { useEffect, useState } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
// noinspection ES6CheckImport
import { tsv } from 'd3'

export default function Gallery (props) {
  const { title } = props
  const idTitle = title.replace(/\s/g, '_')

  const [metaData, setMetaData] = useState([])

  const images = imageAssets[title]

  // Initialize the gallery
  useEffect(() => {
    tsv(imageAssetMetas[title]).then(meta => setMetaData(meta))

    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${idTitle}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  return (
    <div className="ArtifactContents__Gallery" id={idTitle}>
      {images.map((image, index) => (
        <a key={`${title}_gallery_${index}`}
           href={image}
           data-pswp-width={metaData[index]?.width}
           data-pswp-height={metaData[index]?.height}
           target="_blank"
           rel="noreferrer"
        >
          <img className="ArtifactContents__Gallery-thumbnail" src={image} alt={metaData[index]?.name}/>
        </a>
      ))}
    </div>
  )
}
