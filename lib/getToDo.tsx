export default async function getToDo(todoId:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    return res.json();
  }
  