'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Mail, Phone, MapPin } from 'lucide-react'

export function DataTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/?results=10')
        const data = await res.json()
        setUsers(data.results)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching users:', error)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
    </div>
  }

  return (
    <Table>
      <TableCaption>A list of random users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Age</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="flex items-center gap-3">
              <img 
                src={user.picture.thumbnail} 
                alt={user.name.first}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium">{`${user.name.first} ${user.name.last}`}</div>
                <div className="text-sm text-gray-500">{user.gender}</div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                {user.email}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                {user.phone}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                {`${user.location.city}, ${user.location.country}`}
              </div>
            </TableCell>
            <TableCell>{user.dob.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}