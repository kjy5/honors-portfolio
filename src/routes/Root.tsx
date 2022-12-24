import { Artifact } from "../scripts/interfaces";
import ComingSoon from "../components/ComingSoon";
import { Fragment } from "react";
import Year from "../components/Year";
import { useLoaderData } from "react-router-dom";

export default function Root() {
  // Get loader data
  const artifacts = useLoaderData() as Artifact[];

  // Compute year set (get unique years)
  const years: Set<number> = new Set();
  artifacts.forEach((artifact: Artifact) => {
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
            (artifact: Artifact) => artifact.year === year
          )}
        />
      ))}
    </Fragment>
  );
}