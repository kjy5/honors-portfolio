import React from 'react'
import ReactDOM from 'react-dom/client'
import ComingSoon from './components/ComingSoon'
import './styles/index.sass'
import Term from "./components/Term";
import contentString from "./assets/content.tsv?raw";

// Parse content data
const content = contentString.split("\n").map((row) => {
    return row.split("\t");
});
console.debug(content);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ComingSoon/>
        <Term/>
    </React.StrictMode>
    ,
)
