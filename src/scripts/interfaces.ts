export interface Artifact {
  id: string;
  year: number;
  quarter: number;
  title: string;
  subtitle: string;
  images?: Image[];
  embeds?: Embed[];
  links?: Link[];
  text: string;
}

export interface Image {
  artifact: string;
  width: number;
  height: number;
  name: string;
  description?: string;
  thumbnail: string;
  image: string;
}

export interface Link {
  artifact: string;
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface Embed {
  artifact: string;
  url: string;
}
