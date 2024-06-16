"use client";
import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/Animelist";
import { getAnimeResponse } from "@/app/libs/api.libs";

const Page = ({ params: { id, name } }) => {
  const [page, setPage] = useState(1);
  const [genreAnime, setGenreanime] = useState([]);

  const fetchData = async () => {
    const genreAnime = await getAnimeResponse(
      "anime",
      `genres=${id}&order_by=popularity&page=${page}`
    );
    setGenreanime(genreAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  const decodedName = decodeURI(name);

  return (
    <>
      <HeaderMenu title={`Genre ${decodedName} ${page}`} />
      <Pagination
        page={page}
        lastPage={genreAnime.pagination?.last_visible_page}
        setPage={setPage}
      />

      <div className="lg:m-5">
        <AnimeList api={genreAnime} />
      </div>
      <Pagination
        page={page}
        lastPage={genreAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
