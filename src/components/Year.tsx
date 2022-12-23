import '../styles/Year.sass'
import { Artifact } from '../scripts/interfaces'
import Quarter from './Quarter'

/**
 * Year component. Groups a year heading with a list of quarters.
 * @param props {Artifact[]} filteredArtifacts - Artifacts filtered by year
 * @constructor
 * @return {JSX.Element}
 */
export default function Year(props: {
  filteredArtifacts: Artifact[];
}): JSX.Element {
  // Compute year string
  let year = "Freshman 2021 - 2022";
  switch (props.filteredArtifacts[0].year) {
    case 1:
      year = "Sophomore 2022 - 2023";
      break;
    case 2:
      year = "Junior 2023 - 2024";
      break;
    case 3:
      year = "Senior 2024 - 2025";
      break;
    default:
      break;
  }

  // Compute quarter set (get unique quarters)
  const quarters: Set<number> = new Set();
  props.filteredArtifacts.forEach((artifact: Artifact) => {
    quarters.add(artifact.quarter);
  });

  return (
    <div className="year">
      <h1 className="year__name">{year}</h1>
      {Array.from(quarters).map((quarter: number) => (
        <Quarter
          key={quarter}
          filterArtifacts={props.filteredArtifacts.filter(
            (artifact: Artifact) => artifact.quarter === quarter
          )}
        />
      ))}
      <br />
    </div>
  );
}
