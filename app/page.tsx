'use client'
import {ChangeEvent} from 'react'
import Link from "next/link";

export default function Home() {
  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    console.log(name);
    
  }
  return (
    <>
      <h1 className="text-center text-grad">Hi Home Page</h1> <br />
      <Link href="/users">Users</Link>
      <input name='name' type="text" onChange={handleChnage} className='text-black' />
    </>
  );
}
