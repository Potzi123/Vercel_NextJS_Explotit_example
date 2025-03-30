import { promises as fs } from 'fs'
import path from 'path'

export default async function AdminPage() {
  const filePath = path.join(process.cwd(), 'secret_blog.txt')
  const content = await fs.readFile(filePath, 'utf8')

  return (
    <div>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
    </div>
  )
}
