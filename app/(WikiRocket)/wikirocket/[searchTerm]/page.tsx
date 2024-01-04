import Link from "next/link";
import getAllResults from "@/lib/getAllResults";
import Item from "../../components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getAllResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
      return {
          title: `${displayTerm} Not Found`
      }
  }

  return {
      title: displayTerm,
      description: `Search results for ${displayTerm}`
  }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getAllResults(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages

  const content = (
      <main className="bg-slate-200 text-sm text-black mx-auto max-w-4xl mt-6 py-2 min-h-screen">
        <Link href='/wikirocket'  className="underline ml-1"> Back</Link>
          {results
              ? Object.values(results).map(result => {
                  return <Item key={result.pageid} result={result} />
              })
              : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
          }
      </main>
  )

  return content
}