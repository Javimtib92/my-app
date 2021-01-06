import { isProduction, isServiceWorkerEnabled } from '@utils'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// REACT_APP_SERVICE_WORKER from unregister to register. Note this comes with some pitfalls.
// using an environment variable for this is temporal, probably is better to just have this config project wise in the code.
// Learn more about service workers: https://cra.link/PWA
if (isProduction() && isServiceWorkerEnabled()) {
  serviceWorkerRegistration.register()
} else {
  serviceWorkerRegistration.unregister()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
