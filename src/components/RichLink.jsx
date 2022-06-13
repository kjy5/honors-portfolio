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

  const fetchURL = `http://iframely.server.crestify.com/iframely?url=${url}`

  const [linkData, setLinkData] = useState({})

  useEffect(() => {
    fetch(fetchURL)
      .then(res => res.json())
      .then(data => {
        setLinkData(data)
      })
  })

  const getImageHref = () => {
    try {
      return linkData.links[0].href
    } catch (e) {
      return ''
    }
  }

  const getTitle = () => {
    try {
      return linkData.meta.title.replace(/\s{3,}/g, ' ').trim()
    } catch (e) {
      return ''
    }
  }

  const getDescription = () => {
    try {
      return linkData.meta.description.replace(/\s{3,}/g, ' ').trim()
    } catch (e) {
      return ''
    }
  }

  return (
    <div className="rich-link-card-container"><a className="rich-link-card" href={url} target="_blank">
      <div className="rich-link-image-container">
        <div className="rich-link-image" style={{ backgroundImage: 'url(' + getImageHref() + ')' }}/>
      </div>
      <div className="rich-link-card-text">
        <h1 className="rich-link-card-title">
          {getTitle()}
        </h1>
        <p className="rich-link-card-description">
          {getDescription()}
        </p>
        <p className="rich-link-href">{url}</p>
      </div>
    </a></div>
  )
}

RichLink.propTypes = {
  url: PropTypes.string.isRequired
}