import marked from 'marked'

class MarkdownRenderer extends marked.Renderer {
  link(href, title, text) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`
  }

  image(href, title, text) {
    const src = href.replace('../', '/faq-')
    return `<img src="${src}" data-img="${src}" alt="${text}" title="${title}" />`
  }
}

export default new MarkdownRenderer()
