// noinspection ES6CheckImport

import content from '../assets/content.tsv?url';
import {tsv} from 'd3';

export async function getContentData() {
    return await tsv(content);
}