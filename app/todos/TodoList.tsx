import getAllToDos from "@/lib/getAllToDos"
import Link from "next/link"

// 2
const fetchToDos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    return data
}

export default async function TodoList() {
    // 1
    const fetchData: Promise<ToDo[]> = await getAllToDos()
    const data = await fetchData

    // 2
    const todos:ToDo[] = await fetchToDos();

    return (
        <div>{data.map(todo => {
            return (
                <div key={todo.id} className="pb-6">
                    <Link href={`todos/${todo.id}`} className="bg-yellow-500 rounded-md p-2 hover:bg-opacity-80 duration-500">ToDo : {todo.id}</Link>
                </div>
            )
        })}</div>
    )
}
