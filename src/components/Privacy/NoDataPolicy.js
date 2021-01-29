import React from 'react'
import Container from '../Container/Container'
import Header from '../Header/Header'
import Markdown from '../Markdown/Markdown'

import './Privacy.scss'

function NoDataPolicy() {
  return (
    <div>
      <Header navigate={false} />
      <Container className="Privacy">
        <Markdown file={require('./no-data-policy.md')} />
      </Container>
    </div>
  )
}

export default NoDataPolicy
