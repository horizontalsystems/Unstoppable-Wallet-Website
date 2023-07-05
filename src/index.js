import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ModalContextProvider } from './components/Modal/ModalContext'
import { ModalManager } from './components/Modal/ModalManager'
import { initialize } from './redux/wallet-connect-slice'
import { store } from './redux/store'

import 'react-tooltip/dist/react-tooltip.css'
import 'bootstrap/js/dist/dropdown'
import './index.scss'

import Router from './Router'
import unregister from './core/serviceWorker'

store.dispatch(initialize())

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <ModalContextProvider>
          <ModalManager />
          <Router />
        </ModalContextProvider>
      </Provider>
    </React.StrictMode>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
