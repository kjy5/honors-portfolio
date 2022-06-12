import content from '../assets/content.tsv?url'
// noinspection ES6CheckImport
import { tsv } from 'd3'

export async function getArtifactNames () {
  let raw_data = await tsv(content)
  let as_array = await Promise.all(raw_data)
  return as_array.map(row => row.title.replace(/\s/g, '-').toLowerCase())
}
