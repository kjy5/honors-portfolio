// noinspection ES6CheckImport

import content from '../assets/content.tsv?url';
import {tsv} from 'd3';

export async function getContentData() {
    return await tsv(content);
}

export function importImage(url) {
    return new URL(url + '.webp', import.meta.url).href;
}

export function importImages(urlBase, count) {
    const images = [];
    for (let i = 0; i < count; i++) {
        images.push(importImage(urlBase + i));
    }
    return images;
}