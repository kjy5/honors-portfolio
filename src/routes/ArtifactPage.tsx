import { Artifact } from '../scripts/interfaces'
import { useLoaderData } from 'react-router-dom'

/**
 * Artifact page, displays artifact information including text, images, and embedded media
 * @constructor
 * @returns {JSX.Element}
 */
export default function ArtifactPage(): JSX.Element {
  const artifact = useLoaderData() as Artifact;
  return (
    <div>
      <h1>{artifact.title}</h1>
    </div>
  );
}
