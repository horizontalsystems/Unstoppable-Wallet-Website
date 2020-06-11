import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App/App'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
