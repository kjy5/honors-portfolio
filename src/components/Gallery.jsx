import 'photoswipe/dist/photoswipe.css'
import { imageAssetMetas, imageAssets } from '../scripts/asset-imports'
import React, { useEffect, useState } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
// noinspection ES6CheckImport
import { tsv } from 'd3'

export default function Gallery (props) {
  const { title } = props

  const [metaData, setMetaData] = useState({ width: 0, height: 0, name: '', description: '' })

  const images = imageAssets[title]

  // Initialize the gallery
  useEffect(() => {
    tsv(imageAssetMetas[title]).then(meta => setMetaData(meta))

    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${props.title}_gallery`,
      child: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  return (
    <div className="pswp-gallery" id={`${title}_gallery`}>
      {images.map((image, index) => (
        <a key={`${title}_gallery_${index}`}
           href={image}
           data-pswp-width={metaData.width}
           data-pswp-height={metaData.height}
           target="_blank"
           rel="noopener noreferrer"
        >
          <img src={image} alt={metaData.name}/>
        </a>
      ))}
    </div>
  )
}
