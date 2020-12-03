import React, { Component } from 'react'
import marked from 'marked'

import './Markdown.scss'

class Markdown extends Component {
  state = { markdown: '' }

  componentDidMount() {
    // const privacyPath = require(`${this.props.file}`);
    let id = 'faq_ios/en/where-to-download-unstoppable-wallet.md'
    console.log(id === this.props.file)
    const privacyPath = require(`../../${id}`);

    // fetch(privacyPath)
    //   .then(response => {
    //     return response.text()
    //   })
    //   .then(text => {
    //     this.setState({ markdown: marked(text) })
    //   })
  }

  render() {
    const markdown = this.state.markdown
    if (!markdown) {
      return null
    }

    return (
      <div
        className="Markdown"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    )
  }
}

export default Markdown
