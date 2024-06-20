import { Icon } from "@iconify/react";
import { KeyboardEvent, useState } from "react";
import { Work_Sans } from "next/font/google";

const work = Work_Sans({ subsets: ["latin"] })


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const peformSearch = () => {
    console.log('Searchingfor: ', searchTerm)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      peformSearch()
    }
  }
  return (
    <span className="searchbar">
      <input type="search" name="search" id="search" placeholder="Search for anything" onKeyDown={handleKeyDown} className={work.className} />
      <label htmlFor="search">
        <Icon icon={"tdesign:search"} width={14} height={14} />
      </label>
    </span>
  )
}
