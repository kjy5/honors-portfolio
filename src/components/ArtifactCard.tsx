import '../styles/ArtifactCard.sass'
import { Artifact } from '../scripts/interfaces'

export default function ArtifactCard (props: { artifact: Artifact }): JSX.Element {
  return (
    <div className="artifact-card">
      <div className="artifact-card__graphic-container"/>
      <h1 className="artifact-card__title">{props.artifact.title}</h1>
      <h3 className="artifact-card__subtitle">{props.artifact.subtitle}</h3>
    </div>
  )
}