import "../styles/ArtifactCard.sass";

export default (): JSX.Element => {
    return (
        <div className="artifact-card">
            <div className="artifact-card__graphic-container"></div>
            <h1 className="artifact-card__title">Title</h1>
            <h3 className="artifact-card__subtitle">Text</h3>
        </div>
    );
}