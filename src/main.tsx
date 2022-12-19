import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import ComingSoon from './components/ComingSoon'
import './styles/index.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ComingSoon/>
        <App/>
    </React.StrictMode>,
)
