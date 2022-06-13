import content from "../assets/content.tsv?url";
// Metas import
import startingANewHonorsPortfolioWebsiteMeta from "../assets/metas/Starting a New Honors Portfolio Website.tsv?url";
import nautilusRendersMeta from "../assets/metas/Nautilus Renders.tsv?url";
import cosmosInterfaceMeta from "../assets/metas/COSMOS Interface.tsv?url";

// noinspection ES6CheckImport
import { tsv } from "d3";

const imageAssetMetas = {
  "Starting a New Honors Portfolio Website":
    startingANewHonorsPortfolioWebsiteMeta,
  "Nautilus Renders": nautilusRendersMeta,
  "COSMOS Interface": cosmosInterfaceMeta,
};

let contentData = [];
const imageAssetMetasData = {};

/**
 * @description Loads the content data from the content.tsv file
 * @returns {Promise<*>} An array of content data objects
 */
export async function getContent() {
  // Check if contentData is already computed
  if (contentData.length === 0) {
    contentData = await Promise.all(await tsv(content));
  }

  return contentData;
}

/**
 * @description Loads the image asset metas data from the corresponding meta file
 * @param imageAssetName {string} The name of the artifact
 * @returns {Promise<*>} An array of image asset metas data objects
 */
export async function getImageAssetMetas(imageAssetName) {
  if (!imageAssetMetasData[imageAssetName]) {
    imageAssetMetasData[imageAssetName] = await Promise.all(
      await tsv(imageAssetMetas[imageAssetName])
    );
  }

  return imageAssetMetasData[imageAssetName];
}

/**
 * @description Returns a URL compatible string for the given content object
 * @param name {string} The name/title of the artifact
 * @returns {string} A URL compatible string
 */
export function getURLName(name) {
  return name.replace(/\s/g, "_").toLowerCase();
}
