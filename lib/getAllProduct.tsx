
export default async function getAllProduct() {
  const fetchPro = await fetch('https://6512b2e2b8c6ce52b3960859.mockapi.io/products/products',{cache : 'no-cache', next : {tags : ['pro']}})
  return fetchPro.json();
}
