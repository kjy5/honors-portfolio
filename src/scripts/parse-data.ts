import {Artifact, Embed, Image, Link} from "./interfaces";
import artifactsString from "../assets/artifacts.tsv?raw";
import imagesString from "../assets/images.tsv?raw";
import linksString from "../assets/links.tsv?raw";
import embedsString from "../assets/embeds.tsv?raw";

// Parsed sub-objects
let parsedImages: Image[] = [];
let parsedLinks: Link[] = [];
let parsedEmbeds: Embed[] = [];

/**
 * Parse the images.tsv file into `parsedImages`
 */
const parseImages = () => {
    imagesString.split("\n").forEach((line: string, index: number) => {
        // Skip header
        if (index === 0) return;

        // Extract row data
        const [artifact, width, height, name, description, thumbnail, image] = line.split("\t");

        // Add to parsed images
        parsedImages.push({
            artifact,
            width: Number(width),
            height: Number(height),
            name,
            description,
            thumbnail,
            image
        });
    });
}

/**
 * Parse the links.tsv file into `parsedLinks`
 */
const parseLinks = () => {
    linksString.split("\n").forEach((line: string, index: number) => {
        // Skip header
        if (index === 0) return;

        // Extract row data
        const [artifact, title, description, url, image] = line.split("\t");

        // Add to parsed links
        parsedLinks.push({
            artifact,
            title,
            description,
            url,
            image
        });
    });
}

/**
 * Parse the embeds.tsv file into `parsedEmbeds`
 */
const parseEmbeds = () => {
    embedsString.split("\n").forEach((line: string, index: number) => {
        // Skip header
        if (index === 0) return;

        // Extract row data
        const [artifact, url] = line.split("\t");

        // Add to parsed embeds
        parsedEmbeds.push({
            artifact,
            url
        });
    });
}

/**
 * Parse the artifacts.tsv file and integrate sub-objects
 * @returns {Artifact[]} The parsed artifacts
 */
export default (): Artifact[] => {
    let output: Artifact[] = [];

    // Parse sub-objects
    parseImages();
    parseLinks();
    parseEmbeds();

    // Parse content data
    artifactsString.split("\n").forEach((line: string, index: number) => {
        // Skip header
        if (index === 0) return;

        // Extract row data
        const [year, quarter, title, subtitle, hasImages, hasEmbeds, hasLinks, text] = line.split("\t");

        // Start building artifact (fill in required fields)
        const currentArtifact: Artifact = {
            year: parseInt(year),
            quarter: parseInt(quarter),
            title: title,
            subtitle: subtitle,
            text: text
        }

        // Add images
        currentArtifact.images = hasImages ? parsedImages.filter((image: Image) => image.artifact === title) : undefined;

        // Add links
        currentArtifact.links = hasLinks ? parsedLinks.filter((link: Link) => link.artifact === title) : undefined;

        // Add embeds
        currentArtifact.embeds = hasEmbeds ? parsedEmbeds.filter((embed: Embed) => embed.artifact === title) : undefined;
    });

    return output;
}