
export default async function getAllResults(searchTerm: string) {
  const URLSearchParam = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
})
  const res = await fetch('https://en.wikipedia.org/w/api.php?' + URLSearchParam)
  return res.json()
}
