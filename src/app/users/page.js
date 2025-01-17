'use client'
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default function Users() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeInfo, setActiveInfo] = useState('')

  const fetchUser = async () => {
    setLoading(true)
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    setUser(data.results[0])
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const renderInfo = () => {
    switch(activeInfo) {
      case 'email': return user?.email
      case 'phone': return user?.phone
      case 'location': return `${user?.location?.street?.number} ${user?.location?.street?.name}, ${user?.location?.city}, ${user?.location?.country}`
      case 'age': return `Age: ${user?.dob?.age}`
      case 'gender': return `Gender: ${user?.gender}`
      default: return 'Hover over icons to see details'
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
    </div>
  }

  return (
    <main className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Users</h1>
          <Link href="/" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Back Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex flex-col items-center">
            <img 
              src={user?.picture?.large} 
              alt="User" 
              className="w-32 h-32 rounded-full border-4 border-green-500 mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">
              {user?.name?.first} {user?.name?.last}
            </h1>

            <div className="min-h-[3rem] text-center text-black">
              {renderInfo()}
            </div>

            <div className="flex justify-center gap-6 my-8">
              <Mail 
                className="w-8 h-8 cursor-pointer text-gray-600 hover:text-green-500 transition-colors"
                onMouseEnter={() => setActiveInfo('email')}
                onClick={() => setActiveInfo('email')}
              />
              <Phone 
                className="w-8 h-8 cursor-pointer text-gray-600 hover:text-green-500 transition-colors"
                onMouseEnter={() => setActiveInfo('phone')}
                onClick={() => setActiveInfo('phone')}
              />
              <MapPin 
                className="w-8 h-8 cursor-pointer text-gray-600 hover:text-green-500 transition-colors"
                onMouseEnter={() => setActiveInfo('location')}
                onClick={() => setActiveInfo('location')}
              />
              <Calendar 
                className="w-8 h-8 cursor-pointer text-gray-600 hover:text-green-500 transition-colors"
                onMouseEnter={() => setActiveInfo('age')}
                onClick={() => setActiveInfo('age')}
              />
              <User 
                className="w-8 h-8 cursor-pointer text-gray-600 hover:text-green-500 transition-colors"
                onMouseEnter={() => setActiveInfo('gender')}
                onClick={() => setActiveInfo('gender')}
              />
            </div>
            <button 
              onClick={fetchUser}
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Generate New User
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}