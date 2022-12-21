import ArtifactCard from "./ArtifactCard";
import "../styles/ArtifactGrid.sass";

export default function (): JSX.Element {
    return (
        <div className="artifact-grid">
            <ArtifactCard/>
            <ArtifactCard/>
            <ArtifactCard/>
        </div>
    )
}