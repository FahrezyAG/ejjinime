"use client"
import React, { useEffect, useState } from "react"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import AnimeList from "@/components/Animelist"
import { getAnimeResponse } from "../libs/api.libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

const fetchData = async() => {
 const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    }

    useEffect (() => {
        fetchData()
    }, [page])



    return (
        <>
        <HeaderMenu title={`Most Popular Anime ${page}`}/>
        <Pagination
        page={page} 
        lastPage={topAnime.pagination?.last_visible_page} 
        setPage={setPage}
        />
        <div className="lg:m-5">

        <AnimeList api={topAnime}/>
        </div>
        <Pagination 
        page={page} 
        lastPage={topAnime.pagination?.last_visible_page} 
        setPage={setPage}
           />
        </>
    )
}

export default Page