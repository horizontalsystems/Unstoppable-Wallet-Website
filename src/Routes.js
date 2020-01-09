import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
