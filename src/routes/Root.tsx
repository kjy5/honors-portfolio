import { ArtifactData } from "../scripts/interfaces";
import ComingSoon from "../components/ComingSoon";
import { Fragment } from "react";
import Year from "../components/Year";
import { useLoaderData } from "react-router-dom";

/**
 * Website root, displays all artifacts and navigation
 * @constructor
 * @returns {JSX.Element}
 */
export default function Root(): JSX.Element {
  // Get loader data
  const artifacts = useLoaderData() as ArtifactData[];

  // Compute year set (get unique years)
  const years: Set<number> = new Set();
  artifacts.forEach((artifact: ArtifactData) => {
    years.add(artifact.year);
  });

  return (
    <Fragment>
      <ComingSoon />

      {/* Artifacts */}
      {Array.from(years).map((year: number) => (
        <Year
          key={year}
          filteredArtifacts={artifacts.filter(
            (artifact: ArtifactData) => artifact.year === year
          )}
        />
      ))}
    </Fragment>
  );
}
