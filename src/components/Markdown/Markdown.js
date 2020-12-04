import React, { Component } from 'react'
import marked from 'marked'
import renderer from './MarkdownRenderer'

import './Markdown.scss'

class Markdown extends Component {
  state = { markdown: '' }

  componentDidMount() {
    fetch(this.props.file)
      .then(resp => resp.text())
      .then(text => {
        this.setState({ markdown: marked(text, { renderer }) })
      })
  }

  render() {
    return (
      <div
        className="Markdown"
        dangerouslySetInnerHTML={{ __html: this.state.markdown }}
      />
    )
  }
}

export default Markdown
