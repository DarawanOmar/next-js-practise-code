import Link from "next/link";
import {AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 items-center ">
        <Link href='/' className="text-3xl font-bold text-grad">Next-JS</Link>
       <div className="hidden md:flex space-x-8">
         <Link className="hover:opacity-75 duration-300" href='/'>Home</Link>
         <Link className="hover:opacity-75 duration-300" href='/users'>Users</Link>
         <Link className="hover:opacity-75 duration-300" href='/search'>Search</Link>
         <Link className="hover:opacity-75 duration-300" href='/todos'>ToDo's</Link>
         <Link className="hover:opacity-75 duration-300" href='/prodcut'>Prodcut</Link>
       </div>
       <div className="md:hidden border rounded-md p-2 text-xl ">
          <AiOutlineMenu/>
       </div>
    </nav>
  )
}
