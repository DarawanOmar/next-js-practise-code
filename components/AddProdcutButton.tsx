"use client"

import { handleSubmit } from '@/actions/serveraction'
import {useTransition} from 'react'

export default function AddProdcutButton() {
    const [isPending, startTransition ] = useTransition()

    const formData = new FormData()
    formData.append("product","macBook Pro")
    formData.append("price","1200")
    
  return (
    <button
        onClick={() => startTransition(() => handleSubmit(formData))}
  className='bg-green-500 py-2 rounded-md'>
        {isPending ? "Loading...." : "Add Prodcut"}
    </button>

  )
}
