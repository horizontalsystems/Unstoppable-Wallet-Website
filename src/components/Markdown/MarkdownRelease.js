import React from 'react'

import MarkdownPreview from '@/components/Markdown/MarkdownPreview'

import './Markdown.scss'

function MarkdownRelease({ text }) {
  if (!text) {
    return <MarkdownPreview className="Markdown-scroll p-5" />
  }

  return (
    <div className="Markdown-scroll p-5">
      <div
        className="Markdown col-sm-12 col-md-9"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  )
}

export default MarkdownRelease
