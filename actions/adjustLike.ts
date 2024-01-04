'use server'
import { revalidateTag } from "next/cache";

export default async function AdjustLike(amount: number) {
    if(!amount) return ;
    await fetch("http://localhost:3000/api/likes",{
        method : "POST",
        cache : "no-cache",
        body : JSON.stringify({amount}),
        headers:{
            'Content-type' : 'application/json'
        }
    })
    revalidateTag("like")
}