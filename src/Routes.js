import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App/App'
import Markdown from './components/Markdown/Markdown'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/privacy" render={() => <Markdown markdown="privacy.md" />} />
        <Route path="/" render={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
