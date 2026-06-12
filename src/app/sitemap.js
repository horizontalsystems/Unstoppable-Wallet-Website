const siteUrl = 'https://unstoppable.money'

export default function sitemap() {
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/tos', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  ]

  const lastModified = new Date('2026-06-12')

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
