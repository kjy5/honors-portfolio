// noinspection ES6CheckImport

import content from '../assets/content.tsv?url';
import {tsv} from 'd3';

export async function getContentData() {
    return await tsv(content);
}

export async function importImage(url) {
    try {
        return await import(url + ".webp?url");
    } catch (e) {
        console.error(e);
    }
}

export async function importImages(urlBase, count) {
    try {
        const images = [];
        for (let i = 0; i < count; i++) {
            images.push(await importImage(urlBase + i));
        }
        console.log(images);
        return images;
    } catch (e) {
        console.error(e);
    }
}