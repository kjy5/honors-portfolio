export interface ArtifactData {
  id: string;
  year: number;
  quarter: number;
  title: string;
  subtitle: string;
  images?: ImageData[];
  embeds?: EmbedData[];
  links?: LinkData[];
  text: string;
}

export interface ImageData {
  artifact: string;
  width: number;
  height: number;
  name: string;
  description?: string;
  thumbnail: string;
  image: string;
}

export interface LinkData {
  artifact: string;
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface EmbedData {
  artifact: string;
  url: string;
}
