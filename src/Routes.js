import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App/App'
import Faq from './components/Faq/Faq'
import Privacy from './components/Privacy/Privacy'
import NoDataPolicy from './components/Privacy/NoDataPolicy'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/privacy" render={Privacy} />
        <Route path="/no-data-policy" render={NoDataPolicy} />
        <Route path="/faq" component={Faq} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
