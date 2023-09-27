import getAllToDos from "@/lib/getAllToDos"
import getToDo from "@/lib/getToDo"
import { notFound } from "next/navigation"

type Props = {
    params:{
        todoId : string
    }
}

export default async function page({params : {todoId}}: Props) {
    const fetchData:Promise<ToDo> = getToDo(todoId)
    const data = await fetchData

    if(!data.id) return notFound()

  return (
    <div className="bg-yellow-500 p-10 rounded-md shadow-xl text-black">
        <h1>{data.id} <span className="font-bold">#{data.title}</span></h1>
        <p>Completed : {data.completed ? "Yes" : "No"}</p>
        <p className="border-t border-black p-2 text-right"> User By {data.userId} </p>
    </div>
  )
}

export async function generateStaticParams() {

    const fetchToDo:Promise<ToDo[]> = await getAllToDos();
    const data = await fetchToDo;

    const trimData = data.splice(0,15)
    return trimData.map(todo => ({
        todoId : todo.id.toString()
    }))
}