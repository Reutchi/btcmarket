import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import posthog from 'posthog-js'

posthog.init('phc_6mVGmUoqvtE0E6iw1vQnBA2vHnetqPVBjPwdtcZAsAk', { api_host: 'https://eu.posthog.com' })
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
