"use client";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/app/libs/api.libs";
import Link from "next/link";

const Genre = () => {
  const [genre, setGenre] = useState([]);
  const [start, setStart] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      try {
        const response = await getAnimeResponse("genres/anime");
        setGenre(response.data);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const itemsToShow = start * 26;
  const hasMoreItems = genre.length > itemsToShow;

  return (
    <div>
      <div className="mt-10 bg-color-secondary mb-4 rounded-lg">
        <h1 className="text-2xl text-center text-color-dark rounded-t-md p-4 bg-[#ece48b] mb-3">
          Genre
        </h1>
        {genre.slice(0, itemsToShow).map((data) => (
          <div key={data.mal_id}>
            <Link
              href={`/genres/${data.mal_id}/${data.name}`}
              className="flex text-color-primary justify-between m-1 cursor-pointer hover:text-color-accent"
            >
              <div className="flex mb-1">
                <p className="px-2">{data.name}</p>
              </div>
              <div className="pl-2 mb-1">
                <p className="px-2">{data.count}</p>
              </div>
            </Link>
          </div>
        ))}
        <div className="flex justify-center">
          {loading ? (
            <p className="text-color-primary p-5">Loading...</p>
          ) : (
            hasMoreItems && (
              <button
                className="text-color-primary p-5 hover:text-color-accent"
                onClick={() => setStart((prev) => prev + 1)}
              >
                Load More..
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Genre;
