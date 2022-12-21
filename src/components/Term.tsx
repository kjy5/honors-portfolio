import "../styles/Term.sass";
import ArtifactCard from "./ArtifactCard";

export default (): JSX.Element => {
    return (
        <div className="term">
            <h1 className="term__name">Fall</h1>
            <div className="term__artifacts">
                <ArtifactCard/>
                <ArtifactCard/>
                <ArtifactCard/>
            </div>
        </div>
    )
}