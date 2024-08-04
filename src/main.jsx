import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

// const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN
// const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID

const domain = "dev-sc68ddnchjg85ior.eu.auth0.com"
const clientId = "Akw6FpNvLHdbkjNaLLuuG32PNZv5Rqv9"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
    >
        <App />
    </Auth0Provider>
)
