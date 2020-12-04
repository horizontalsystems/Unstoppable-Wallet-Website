import React from 'react'
import Container from '../Container/Container'
import Header from '../Header/Header'
import Markdown from '../Markdown/Markdown'

import './Privacy.scss'

function Privacy() {
  return (
    <div>
      <Header navigate={false} />
      <Container className="Privacy">
        <Markdown file={require('./privacy.md')} />
      </Container>
    </div>
  )
}

export default Privacy
