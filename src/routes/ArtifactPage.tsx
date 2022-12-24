import { Artifact } from "../scripts/interfaces";
import { useLoaderData } from "react-router-dom";

export default function ArtifactPage() {
  const artifact = useLoaderData() as Artifact;
  return (
    <div>
      <h1>{artifact.title}</h1>
    </div>
  );
}
