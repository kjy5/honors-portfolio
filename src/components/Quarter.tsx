import '../styles/Quarter.sass'
import ArtifactCard from './ArtifactCard'
import { Artifact } from '../scripts/interfaces'

export default function Quarter (props: { filterArtifacts: Artifact[] }): JSX.Element {
  // Compute quarter string
  let quarter = 'Fall'
  switch (props.filterArtifacts[0].quarter) {
    case 1:
      quarter = 'Winter'
      break
    case 2:
      quarter = 'Spring'
      break
    case 3:
      quarter = 'Summer'
      break
    default:
      break
  }

  return (
    <div className="quarter">
      <h1 className="quarter__name">{quarter}</h1>
      <div className="quarter__artifacts">
        {props.filterArtifacts.map(
          (artifact: Artifact) => <ArtifactCard key={artifact.title}
                                                artifact={artifact}/>)}
      </div>
    </div>
  )
}