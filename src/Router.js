import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './components/App/App'
import Faq from './components/Faq/Faq'
import Privacy from './components/Privacy/Privacy'
import NoDataPolicy from './components/Privacy/NoDataPolicy'
import PayMultistep from './components/Analytics/PayMultistep'
import Analytics from './components/Analytics/Analytics'
import Profile from './components/Analytics/Profile'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/analytics-pay" element={<PayMultistep />} />
        <Route path="/analytics-profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/no-data-policy" element={<NoDataPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
