export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{next : {revalidate : 30}})

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}