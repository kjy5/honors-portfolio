import '../styles/Year.sass'
import { ArtifactData } from '../scripts/interfaces'
import Quarter from './Quarter'
import { ReactElement } from 'react'

/**
 * Year component. Groups a year heading with a list of quarters.
 * @param {{filteredArtifacts: ArtifactData[]}} props - Artifacts filtered by year
 * @constructor
 * @return {ReactElement}
 */
export default function Year(props: {
  filteredArtifacts: ArtifactData[];
}): ReactElement {
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
  props.filteredArtifacts.forEach((artifact: ArtifactData) => {
    quarters.add(artifact.quarter);
  });

  // Render
  return (
    <div className="year">
      <h1 className="year__name">{year}</h1>
      {Array.from(quarters).map((quarter: number) => (
        <Quarter
          key={quarter}
          filteredArtifacts={props.filteredArtifacts.filter(
            (artifact: ArtifactData) => artifact.quarter === quarter
          )}
        />
      ))}
      <br />
    </div>
  );
}
