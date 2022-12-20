import React from 'react'
import ReactDOM from 'react-dom/client'
import ComingSoon from './components/ComingSoon'
import ArtifactCard from "./components/ArtifactCard";
import './styles/index.sass'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ComingSoon/>
        <ArtifactCard/>
        <ArtifactCard/>
        <ArtifactCard/>
    </React.StrictMode>,
)
