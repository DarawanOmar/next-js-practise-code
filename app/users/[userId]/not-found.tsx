import Link from 'next/link'
import React from 'react'

export default function NotoFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen '>
        <h1>This user Not Found Please Chech it Again </h1>
        <Link href='/users' className='underline'>Back To Users</Link>
    </div>
  )
}
