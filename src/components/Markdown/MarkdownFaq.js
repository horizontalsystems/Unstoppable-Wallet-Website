import React from 'react'

import MarkdownPreview from '@/components/Markdown/MarkdownPreview'

import './Markdown.scss'

function MarkdownFaq({ text }) {
  if (!text) {
    return <MarkdownPreview />
  }

  return (
    <div
      className="Markdown"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default MarkdownFaq
