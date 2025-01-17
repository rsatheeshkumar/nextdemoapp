'use client'

import { DataTable } from '@/components/ui/data-table'
import Link from 'next/link'

export default function TablePage() {
  return (
    <main className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">User Data Table</h1>
          <Link href="/" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Back Home
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6">
          <DataTable />
        </div>
      </div>
    </main>
  )
}