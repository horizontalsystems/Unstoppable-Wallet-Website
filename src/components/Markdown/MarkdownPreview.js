import React from 'react'

function MarkdownPreview() {
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
      <div className="Markdown col-sm-12 col-md-9">
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

export default MarkdownPreview
