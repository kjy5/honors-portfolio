import ArtifactGrid from "./ArtifactGrid";
import "../styles/Term.sass";

export default (): JSX.Element => {
    return (
        <div className="term">
            <h1 className="term__year">Freshman 2021</h1>
            <h1 className="term__name">Fall</h1>
            <ArtifactGrid/>
        </div>
    )
}