import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

import Page from '@/components/Page/Page'
import Faq from '@/components/Faq/Faq'
import faq from '../../faq.json'

export const metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Answers to common questions about Unstoppable Wallet — self-custody, security, supported blockchains, transactions, fees and privacy.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ — Unstoppable Wallet',
    description:
      'Answers to common questions about Unstoppable Wallet — self-custody, security, supported blockchains, transactions, fees and privacy.',
    url: 'https://unstoppable.money/faq',
  },
}

function loadGroups() {
  return faq.map(({ section, items }) => ({
    section: section.en,
    items: items
      .map(({ en }) => {
        try {
          const markdown = fs.readFileSync(path.join(process.cwd(), 'src', en.markdown), 'utf-8')
          // the leading "# Title" duplicates the question and is hidden by CSS
          const html = marked(markdown).replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/, '')
          return { title: en.title, html }
        } catch {
          return null
        }
      })
      .filter(Boolean),
  }))
}

function buildJsonLd(groups) {
  const mainEntity = groups.flatMap(({ items }) =>
    items.map(({ title, html }) => {
      const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

      return {
        '@type': 'Question',
        name: title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: text.length > 1200 ? `${text.slice(0, 1200).trim()}…` : text,
        },
      }
    })
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
}

function FaqPage() {
  const groups = loadGroups()

  return (
    <Page black>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(groups)) }}
      />

      <div className="container">
        <Faq groups={groups} />
      </div>
    </Page>
  )
}

export default FaqPage
