import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

type Props = {
    params : {
        searchTerm: string
    }
}



type SerarchResults = {
    organic_results: [
        {
          position: string,
          title:string,
          link: string,
          favicon:string,
          snippet: string,
          source: string
        }
    ]
}


export async function generateMetadata({params: {searchTerm}}: Props){
    return{
        title:searchTerm,
        description:`this is serach fro ${searchTerm}`
    }
}


const FetchResults = async (searchTerm: string) => {

    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}` )
    const data: SerarchResults = await res.json()
    return data
}

export default async function page({params: {searchTerm}}: Props) {

    // throw new Error("Opps Some thing went wrong")
    const fetchData = await FetchResults(searchTerm); 
    
  return (
    <>
        {/* <p className="text-gray-500 mt-2 ">Your Search For {searchTerm}</p> */}
        <ol className="space-y-6 ml-6 mt-4">
            {fetchData.organic_results.map((result) => (
                <li key={result.position} className="list-decimal">
                    <div className="font-bold text-xl flex items-center">
                        <h1>Title : {result.source}</h1> 
                        <Image src={result.favicon} width={30} height={30} alt={result.source} className="rounded-full object-cover"/>
                    </div>
                    <p>{result.title}</p>
                    <p>{result.snippet}</p>
                    <Link href={result.link} target="_blank" className="max-w-[100px]">{result.link}</Link>
                </li>
            ))}
        </ol>
       
    </>
  );
}