// noinspection ES6CheckImport

import content from '../assets/content.tsv?url';
import {tsv} from 'd3';

export async function getContentData() {
    return await tsv(content);
}

export async function importImage(url) {
    try {
        const image = await import(url + ".webp?url");
        return image.default;
    } catch (e) {
        console.error(e);
    }
}

export async function importImages(urlBase, count) {
    try {
        const images = [];
        for (let i = 0; i < count; i++) {
            const image = await importImage(urlBase + i);
            images.push(image);
        }
        return images;
    } catch (e) {
        console.error(e);
    }
}