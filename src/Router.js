import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './components/App/App'
import Faq from './components/Faq/Faq'
import Privacy from './components/Privacy/Privacy'
import NoDataPolicy from './components/Privacy/NoDataPolicy'
import PayMultistep from './components/Premium/PayMultistep'
import Premium from './components/Premium/Premium'
import Profile from './components/Premium/Profile'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/analytics" element={<Premium />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/premium-pay" element={<PayMultistep />} />
        <Route path="/premium-profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/no-data-policy" element={<NoDataPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
