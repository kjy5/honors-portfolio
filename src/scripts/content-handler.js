import content from '../assets/content.tsv?url'
// noinspection ES6CheckImport
import { tsv } from 'd3'

let contentData = []

/**
 * @description Loads the content data from the content.tsv file
 * @returns {Promise<void>} An array of content data objects
 */
export async function getContent () {
  // Check if contentData is already computed
  if (contentData.length === 0) {
    contentData = await Promise.all(await tsv(content))
  }

  return contentData
}

/**
 * @description Returns a URL compatible string for the given content object
 * @param name The name/title of the artifact
 * @returns {string} A URL compatible string
 */
export function getURLName (name) {
  return name.replace(/\s/g, '_').toLowerCase()
}
