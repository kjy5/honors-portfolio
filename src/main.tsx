import React from 'react'
import ReactDOM from 'react-dom/client'
import ComingSoon from './components/ComingSoon'
import './styles/index.sass'
import Term from "./components/Term";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ComingSoon/>
        <Term/>
    </React.StrictMode>
    ,
)
