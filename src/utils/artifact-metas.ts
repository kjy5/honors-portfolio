import { ArtifactMetas } from "../models/artifact-meta-models.ts";
import artifactMetasString from "../models/artifact-metas.json?raw";

const artifactMetas: ArtifactMetas = JSON.parse(
	artifactMetasString,
) as ArtifactMetas;

export default artifactMetas;
