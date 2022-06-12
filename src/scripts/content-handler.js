import content from '../assets/content.tsv?url'
// noinspection ES6CheckImport
import { tsv } from 'd3'

export async function getContent () {
  return await Promise.all(await tsv(content))
}

export function getArtifactURLNames (contentAsArray) {
  return contentAsArray.map(row => row.title.replace(/\s/g, '-').toLowerCase())
}

export function getURLName (name) {
  return name.replace(/\s/g, '-').toLowerCase()
}
