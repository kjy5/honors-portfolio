import '../styles/Quarter.sass'
import ArtifactCard from './ArtifactCard'
import { ArtifactData } from '../scripts/interfaces'

/**
 * Quarter component. Groups a quarter heading with a grid of artifacts.
 * @param {{filteredArtifacts: ArtifactData[]}} props - filterArtifacts - Artifacts filtered by quarter
 * @constructor
 * @return {JSX.Element}
 */
export default function Quarter(props: {
  filteredArtifacts: ArtifactData[];
}): JSX.Element {
  // Compute quarter string
  let quarter = "Fall";
  switch (props.filteredArtifacts[0].quarter) {
    case 1:
      quarter = "Winter";
      break;
    case 2:
      quarter = "Spring";
      break;
    case 3:
      quarter = "Summer";
      break;
    default:
      break;
  }

  return (
    <div className="quarter">
      <h1 className="quarter__name">{quarter}</h1>
      <div className="quarter__artifacts">
        {props.filteredArtifacts.map((artifact: ArtifactData) => (
          <ArtifactCard key={artifact.id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
}
