import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { initialize } from './redux/wallet-connect-slice'

import 'react-tooltip/dist/react-tooltip.css'
import './index.scss'

import Router from './Router'
import unregister from './core/serviceWorker'

store.dispatch(initialize())

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
