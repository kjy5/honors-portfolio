import content from '../assets/content.tsv?url'
// Metas import
import cosmosInterfaceMeta from '../assets/metas/COSMOS Interface.tsv?url'
import nautilusRendersMeta from '../assets/metas/Nautilus Renders.tsv?url'
import startingANewHonorsPortfolioWebsiteMeta from '../assets/metas/Starting a New Honors Portfolio Website.tsv?url'

// noinspection ES6CheckImport
import { tsv } from 'd3'

const imageAssetMetas = {
  'Starting a New Honors Portfolio Website':
  startingANewHonorsPortfolioWebsiteMeta,
  'Nautilus Renders': nautilusRendersMeta,
  'COSMOS Interface': cosmosInterfaceMeta,
}

/**
 * @description Loads the content data from the content.tsv file
 * @returns {Promise<*>} An array of content data objects
 */
export async function getContent () {
  return await Promise.all(await tsv(content))
}

/**
 * @description Loads the image asset metas data from the corresponding meta file
 * @param imageAssetName {string} The name of the artifact
 * @returns {Promise<*>} An array of image asset metas data objects
 */
export async function getImageAssetMetas (imageAssetName) {
  return await Promise.all(await tsv(imageAssetMetas[imageAssetName]))
}

/**
 * @description Returns a URL compatible string for the given content object
 * @param name {string} The name/title of the artifact
 * @returns {string} A URL compatible string
 */
export function getURLName(name) {
  return name.replace(/\s/g, "_").toLowerCase();
}
