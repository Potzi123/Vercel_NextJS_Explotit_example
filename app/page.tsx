import { promises as fs } from 'fs'
import path from 'path'

export default async function Home() {
  const filePath = path.join(process.cwd(), 'home.txt')
  const content = await fs.readFile(filePath, 'utf8')

  return (
    <main className="min-h-screen p-8">
      <pre className="whitespace-pre-wrap font-sans">
        {content}
      </pre>
    </main>
  )
} 