'use client'

import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"


export default function SerachTerm() {
  const [search,setSearch] = useState('');
  const router = useRouter()
  
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}`)
  }
  return (
    <form onSubmit={handleSearch} className="md:flex ">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='p-3  w-full rounded-md outline-none text-black text-center placeholder:text-center placeholder:text-gray-400' placeholder='Search' />
        <button type="submit" className='w-full md:w-24 px-6 py-2 bg-yellow-700 rounded-md mt-2 md:mt-0 md:mx-1 hover:bg-yellow-600 duration-300'>Search</button>
    </form>
  )
}
