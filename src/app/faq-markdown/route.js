import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  console.log(' --------------- =>', searchParams)
  const file = searchParams.get('file') || 0.41

  const filePath = path.join(process.cwd(), 'src', file)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const htmlContent = marked(fileContent)

  return Response.json({ faq: htmlContent })
}
