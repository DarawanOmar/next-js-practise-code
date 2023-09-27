import { Metadata } from "next"
import SerachTerm from "./components/SerachCom"
type Props = {}

export const metadata: Metadata = {
    title: 'Search',
    description: 'This is Search Page',
  }
export default function SearchLayout({children}: {children: React.ReactNode}) {
  return (
    <div className=''>
      <div className="flex flex-col md:flex-row justify-between ">
        <h1 className="text-4xl text-grad text-center md:text-right mb-10 md:mb-0 font-bold ">Ai Search Tool</h1>
        <div className="md:flex-1 md:ml-10"><SerachTerm/></div>
      </div>
      <div className="">{children}</div>
    </div>  
  )
}