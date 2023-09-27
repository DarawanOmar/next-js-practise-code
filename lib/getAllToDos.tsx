export default async function getAllToDos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  return res.json();
}
