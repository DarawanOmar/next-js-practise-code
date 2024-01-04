'use client'
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"



export default function NavbarSearch() {

    const [searchTerm, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`wikirocket/${searchTerm}`)
    }
  return (
    <div className="flex flex-col md:flex-row justify-between items-center ">
        <h1 className="text-2xl font-bold ">Wiki Rocket🖥️</h1>
        <form onSubmit={handleSubmit} className="space-x-2">
            <input value={searchTerm} onChange={(e) => setSearch(e.target.value)} type="text" className="p-2 text-center md:w-80 rounded-md outline-none placeholder:text-center placeholder:text-gray-400 text-black " placeholder="Search" />
            <button type="submit" className="p-2 bg-gray-600 rounded-md">🚀</button>
        </form>
    </div>
  )
}
