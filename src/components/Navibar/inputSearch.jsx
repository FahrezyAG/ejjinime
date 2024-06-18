"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (event) => {
    const keyword = searchRef.current.value
    if(keyword.trim() == "") return
   if(event.key === "Enter" || event.type === "click") {
    event.preventDefault()
    router.push(`/search/${keyword}`)
   }
   



  }
  return (

    <div className="flex">
      <input
        placeholder="Search Anime ...."
        className="border-1 border-color-secondary rounded-l-lg px-4 py-2 "
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch} className="border-1 border-color-secondary rounded-r-lg bg-color-primary px-2">
        <MagnifyingGlass size={24} className="top-2 end-2" />
      </button>
    </div>


  )
}

export default InputSearch