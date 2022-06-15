import { content, imageAssetMetas, linkAssetMetas } from './asset-imports'
// noinspection ES6CheckImport
import { tsv } from 'd3'

/**
 * @description Loads the content data from the content.tsv file
 * @returns {Promise<*>} An array of content data objects
 */
export async function getContent() {
  return Promise.all(await tsv(content));
}

/**
 * @description Loads the image asset metas data from the corresponding meta file
 * @param imageAssetName {string} The name of the artifact
 * @returns {Promise<*>} An array of image asset metas data objects
 */
export async function getImageAssetMetas(imageAssetName) {
  return Promise.all(await tsv(imageAssetMetas[imageAssetName]));
}

/**
 * @description Loads the link asset metas data from the corresponding meta file
 * @param linkAssetName {string} The name of the artifact
 * @returns {Promise<Awaited<unknown>[]>} An array of link asset metas data objects
 */
export async function getLinkAssetMetas(linkAssetName) {
  return Promise.all(await tsv(linkAssetMetas[linkAssetName]));
}

/**
 * @description Returns a URL compatible string for the given content object
 * @param name {string} The name/title of the artifact
 * @returns {string} A URL compatible string
 */
export function getURLName (name) {
  return name.replace(/\s/g, '_').toLowerCase()
}

/**
 * @description Convert year number to string
 * @param year {number} Year number
 * @returns {string} Year string
 */
export const yearToString = (year) => {
  switch (year) {
    case 0:
      return 'Freshman'
    case 1:
      return 'Sophomore'
    case 2:
      return 'Junior'
    case 3:
      return 'Senior'
    default:
      return 'Graduate'
  }
}

/**
 * @description Convert quarter number to string
 * @param quarter {number} Quarter number
 * @returns {string} Quarter string
 */
export const quarterToString = (quarter) => {
  switch (quarter) {
    case 0:
      return 'Fall'
    case 1:
      return 'Winter'
    case 2:
      return 'Spring'
    default:
      return 'Summer'
  }
}