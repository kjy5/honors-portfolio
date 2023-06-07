import { ArtifactData } from "../scripts/interfaces";
import ComingSoon from "../components/ComingSoon";
import { ReactElement } from "react";
import Year from "../components/Year";
import { useLoaderData } from "react-router-dom";

/**
 * Website root, displays all artifacts and navigation
 * @constructor
 * @returns {ReactElement}
 */
export default function Root(): ReactElement {
  // Get loader data
  const artifacts = useLoaderData() as ArtifactData[];

  // Compute year set (get unique years)
  const years: Set<number> = new Set();
  artifacts.forEach((artifact: ArtifactData) => {
    years.add(artifact.year);
  });

  return (
    <>
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
    </>
  );
}
