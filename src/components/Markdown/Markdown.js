import React, { Component } from 'react'
import marked from 'marked'
import Container from '../Container/Container'
import Header from '../Header/Header'

import './Markdown.scss'

class Markdown extends Component {
  constructor(props) {
    super(props)

    this.state = { markdown: '' }
  }

  componentDidMount() {
    const privacyPath = require(`./${this.props.markdown}`);

    fetch(privacyPath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({ markdown: marked(text) })
      })
  }

  render() {
    return (
      <div>
        <Header navigate={false} />
        <Container>
          <div className="Markdown" dangerouslySetInnerHTML={{ __html: this.state.markdown }} />
        </Container>
      </div>
    )
  }
}

export default Markdown
