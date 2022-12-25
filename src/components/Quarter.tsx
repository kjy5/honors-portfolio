import '../styles/Quarter.sass'
import ArtifactCard from './ArtifactCard'
import { ArtifactData } from '../scripts/interfaces'

/**
 * Quarter component. Groups a quarter heading with a grid of artifacts.
 * @param props {ArtifactData[]} filterArtifacts - Artifacts filtered by quarter
 * @constructor
 * @return {JSX.Element}
 */
export default function Quarter(props: {
  filterArtifacts: ArtifactData[];
}): JSX.Element {
  // Compute quarter string
  let quarter = "Fall";
  switch (props.filterArtifacts[0].quarter) {
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
        {props.filterArtifacts.map((artifact: ArtifactData) => (
          <ArtifactCard key={artifact.id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
}
