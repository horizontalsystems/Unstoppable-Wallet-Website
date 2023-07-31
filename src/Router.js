import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './components/App/App'
import Faq from './components/Faq/Faq'
import Privacy from './components/Privacy/Privacy'
import NoDataPolicy from './components/Privacy/NoDataPolicy'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/no-data-policy" element={<NoDataPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
