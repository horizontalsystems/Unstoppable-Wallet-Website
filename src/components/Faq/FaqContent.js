import React, { useEffect, useState } from 'react'
import MarkdownFaq from '@/components/Markdown/MarkdownFaq'

function FaqContent({ file }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`/faq-markdown?file=${file}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setData(data.faq)
      })
      .catch(err => {
        console.log(err)
      })
  }, [file])

  return <MarkdownFaq text={data} />
}

export default FaqContent
