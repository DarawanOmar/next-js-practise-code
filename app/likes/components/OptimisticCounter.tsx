'use client'
import AdjustLike from '@/actions/adjustLike'
import {experimental_useOptimistic as useOptimistic} from 'react'

type Props = {
    likes : number
}

export default function OptimisticCounter({likes}: Props) {

    const [optimisticLike, addOptimisticLike] = useOptimistic(
        likes,
        (state,amount) => state + Number(amount) 
    )

    const updateLike = async (amount : number) => {
        addOptimisticLike(amount)
        await AdjustLike(amount)
    }

  return (
    <div className="p-4 border border-gray-400 flex space-x-3 max-w-max mx-auto">
        <h1>Optimistic Counter</h1>
        <button onClick={() => updateLike(-1)} className="bg-emerald-500 px-2 py-1 rounded-sm">-</button>
        <p>{optimisticLike}</p>
        <button onClick={() => updateLike(1)} className="bg-emerald-500 px-2 py-1 rounded-sm">+</button>
    </div>
  )
}