import React from 'react'
import ReactDOM from 'react-dom/client'
import ComingSoon from './components/ComingSoon'
import './styles/index.sass'
import ParseData from "./scripts/parse-data";
import {Artifact} from "./scripts/interfaces";
import Year from "./components/Year";

// Parse data and return as an array of Artifact objects
const artifacts: Artifact[] = ParseData();
console.debug(artifacts);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ComingSoon/>
        <Year/>
    </React.StrictMode>
);
