'use client'
import AdjustLike from "@/actions/adjustLike"

type Props = {
    likes : number
}
export default function NormalCounter({likes}: Props) {

  return (
    <div className="p-4 border border-gray-400 flex space-x-3 max-w-max mx-auto">
        <h1>Normal Counter</h1>
        <button onClick={() => AdjustLike(-1)} className="bg-emerald-500 px-2 py-1 rounded-sm">-</button>
        <p>{likes}</p>
        <button onClick={() => AdjustLike(1)} className="bg-emerald-500 px-2 py-1 rounded-sm">+</button>
    </div>
  )
}