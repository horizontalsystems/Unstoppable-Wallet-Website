import React from 'react'

import './Markdown.scss'

function Markdown({ text }) {
  if (!text) {
    const body = (
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
    )
    return (
      <div className="Markdown-scroll p-5">
        <div className="Markdown col-sm-12 col-md-8">
          <h1 className="placeholder-glow">
            <span className="placeholder col-4"></span>
          </h1>
          {body}
          <h2 className="placeholder-glow">
            <span className="placeholder col-3" />
          </h2>
          {body}
          <h2 className="placeholder-glow">
            <span className="placeholder col-4" />
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className="Markdown-scroll p-5">
      <div
        className="Markdown col-sm-12 col-md-8"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  )
}

export default Markdown
