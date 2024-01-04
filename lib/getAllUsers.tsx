export async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}

export async function getAllUsers2() {
  const res = await fetch("http://127.0.0.1:8000/api/users", {
    method: "GET",
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
