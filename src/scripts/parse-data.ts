import { ArtifactData, EmbedData, ImageData, LinkData } from "./interfaces";
import artifactsString from "../assets/artifacts.txt?raw";
import embedsString from "../assets/embeds.txt?raw";
import imagesString from "../assets/images.txt?raw";
import linksString from "../assets/links.txt?raw";

// Parsed sub-objects
const parsedImages: ImageData[] = [];
const parsedLinks: LinkData[] = [];
const parsedEmbeds: EmbedData[] = [];

/**
 * Parse the images.txt file into `parsedImages`
 */
const parseImages = (): void => {
  imagesString
    .trim()
    .split("\n")
    .forEach((line: string, index: number) => {
      // Skip header
      if (index === 0) return;

      // Extract row data
      const [artifact, width, height, name, description, thumbnail, image] =
        line.split("\t");

      // Add to parsed images
      parsedImages.push({
        artifact,
        width: Number(width),
        height: Number(height),
        name,
        description,
        thumbnail,
        image,
      });
    });
};

/**
 * Parse the links.txt file into `parsedLinks`
 */
const parseLinks = (): void => {
  linksString
    .trim()
    .split("\n")
    .forEach((line: string, index: number) => {
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
        image,
      });
    });
};
/**
 * Parse the embeds.txt file into `parsedEmbeds`
 */
const parseEmbeds = (): void => {
  embedsString
    .trim()
    .split("\n")
    .forEach((line: string, index: number) => {
      // Skip header
      if (index === 0) return;

      // Extract row data
      const [artifact, url] = line.split("\t");

      // Add to parsed embeds
      parsedEmbeds.push({
        artifact,
        url,
      });
    });
};
/**
 * Parse the artifacts.txt file and integrate sub-objects
 * @returns {ArtifactData[]} The parsed artifacts
 */
export default function ParseData(): ArtifactData[] {
  const output: ArtifactData[] = [];

  // Parse sub-objects
  parseImages();
  parseLinks();
  parseEmbeds();

  // Parse content data
  artifactsString
    .trim()
    .split("\n")
    .forEach((line: string, index: number) => {
      // Skip header
      if (index === 0) return;

      // Extract row data
      const [
        year,
        quarter,
        title,
        subtitle,
        hasImages,
        hasEmbeds,
        hasLinks,
        text,
      ] = line.split("\t");

      // Start building artifact (fill in required fields)
      const currentArtifact: ArtifactData = {
        id: title.replaceAll(" ", "-").toLowerCase(),
        year: parseInt(year),
        quarter: parseInt(quarter),
        title,
        subtitle,
        text,
      };

      // Add images
      currentArtifact.images = hasImages
        ? parsedImages.filter((image: ImageData) => image.artifact === title)
        : undefined;

      // Add links
      currentArtifact.links = hasLinks
        ? parsedLinks.filter((link: LinkData) => link.artifact === title)
        : undefined;

      // Add embeds
      currentArtifact.embeds = hasEmbeds
        ? parsedEmbeds.filter((embed: EmbedData) => embed.artifact === title)
        : undefined;

      // Add to output
      output.push(currentArtifact);
    });

  return output;
}
