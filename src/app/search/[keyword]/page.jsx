import AnimeList from "@/components/Animelist"
import Link from "next/link"
import Header from "@/components/Animelist/Header"
import { getAnimeResponse } from "@/app/libs/api.libs"

const Page = async ({params}) => {
const { keyword } = params
const decodedKeyword = decodeURI(keyword)
const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)
  return (
    <>
      <section>
        <div className="text-color-primary text-xl ml-3 mt-4">
         {`Search results for ${decodedKeyword}...`}
        </div>
          <AnimeList api={searchAnime} />
      </section>
    </>

  )
}

export default Page
