import React from 'react'
import { createRoot } from 'react-dom/client'
import { ModalContextProvider } from './components/Modal/ModalContext'
import { ModalManager } from './components/Modal/ModalManager'

import 'react-tooltip/dist/react-tooltip.css'
import 'bootstrap/js/dist/dropdown'
import './index.scss'

import Router from './Router'
import unregister from './core/serviceWorker'

createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <ModalContextProvider>
        <ModalManager />
        <Router />
      </ModalContextProvider>
    </React.StrictMode>
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
