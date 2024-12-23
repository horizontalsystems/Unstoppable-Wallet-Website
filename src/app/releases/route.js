import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const version = searchParams.get('version') || 0.41

  const filePath = path.join(process.cwd(), 'public/releases', `${version}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const htmlContent = marked(fileContent)

  return Response.json({ release: htmlContent })
}
