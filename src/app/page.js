import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4">
          <Link 
            href="/users" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Users
          </Link>
          <Link 
            href="/table" 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            View Table
          </Link>
        </div>
      </div>
    </main>
  )
}