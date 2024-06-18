"use client";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/app/libs/api.libs";
import Image from "next/image";
import { Trophy, Star, ThumbsUp, UserPlus, HourglassHigh } from "@phosphor-icons/react/dist/ssr";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Link from "next/link";
import Loading from "@/app/loading";

const Page = ({ params: { id } }) => {
  const [anime, setAnime] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [characterStart, setCharacterStart] = useState(0);
  const charactersPerPage = 10;

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const animeResponse = await getAnimeResponse(`anime/${id}`);
        const charactersResponse = await getAnimeResponse(`anime/${id}/characters`);
        setAnime(animeResponse.data);
        setCharacters(charactersResponse.data);
        setDisplayedCharacters(charactersResponse.data.slice(0, charactersPerPage));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchAnimeData();
  }, [id]);

  const loadMoreCharacters = () => {
    const newStart = characterStart + charactersPerPage;
    const moreCharacters = characters.slice(newStart, newStart + charactersPerPage);
    setDisplayedCharacters((prev) => [...prev, ...moreCharacters]);
    setCharacterStart(newStart);
  };

  if (!anime) return <Loading/>;

  return (
    <div className="flex-wrap sm:flex-nowrap flex justify-center">
      <div className="rounded bg-color-secondary mr-3 ml-3 mt-10 p-10 w-full md:max-w-60 sm:max-w-60">
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full md:max-w-60"
        />
        <div className="text-color-primary mt-7 rounded-lg">
          <p className="m-1">{anime.rating}</p>
          <p className="m-1 flex gap-1">
            <HourglassHigh size={20} color="#ffffff" weight="fill" />
            {anime.duration}
          </p>
          {anime.score ? (
            <p className="flex gap-1 m-1">
              <Star size={20} color="#ffffff" weight="fill" />
              {anime.score} / 10 ({anime.scored_by})
            </p>
          ) : (
            <p className="flex gap-1 m-1">
              <Star size={20} color="#ffffff" weight="fill" />
              N/A
            </p>
          )}
          {anime.rank ? (
            <p className="flex gap-1 m-1">
              <Trophy size={20} color="#ffffff" />#{anime.rank}
            </p>
          ) : (
            <p className="flex gap-1 m-1">
              <Trophy size={20} color="#ffffff" />
              N/A{anime.rank}
            </p>
          )}
          <p className="flex gap-1 m-1">
            <UserPlus size={20} color="#ffffff" weight="fill" />
            {anime.popularity}
          </p>
          <p className="flex gap-1 m-1">
            <ThumbsUp size={20} color="#ffffff" weight="fill" />
            {anime.favorites}
          </p>
          <p className="mt-8 underline underline-offset-4 rounded w-15 justify-center items-center text-center px-1">
            {anime.status}
          </p>
        </div>
      </div>

      <div className="bg-color-secondary mr-3 ml-3 mt-10 rounded-lg">
        <div className="ml-10 mr-10 mt-4 text-color-primary pb-3">
          <h1 className="text-2xl">{anime.title_english}</h1>
          <h1 className="text-sm text-color-variant mb-2 line-clamp-1">
            {anime.title_japanese}
          </h1>
          <div className="flex-wrap flex text-sm gap-2 items-center mt-1">
            <span className="rounded border w-11 justify-center items-center text-center">
              {anime.aired.prop.from.year}
            </span>
            {anime.episodes ? (
              <span className="border rounded w-20 justify-center items-center text-center">
                <p className=""> {anime.episodes} Episodes</p>
              </span>
            ) : (
              <></>
            )}

            {anime.genres.map((data, index) => {
              return (
                <div key={index}>
                  <p className="border rounded w-15 px-1">{data.name}</p>
                </div>
              );
            })}
            <p className="border rounded w-15 justify-center items-center text-center px-1">
              {anime.type}
            </p>
          </div>
          <h1 className="text-xl mr-2 mt-6 mb-1">Synopsis</h1>
          <p className="font-extralight mb-10">{anime.synopsis}</p>
          <h1 className="text-xl mr-2 mt-6 mb-1">Characters</h1>
          <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 overflow-auto h-max mb-10 max-h-96">
            {displayedCharacters.map((data, index) => {
              return (
                <div key={index}>
                  <Link
                    href={`/characters/${data.character.mal_id}`}
                    className="rounded-lg grid bg-color-dark flex-wrap "
                  >
                    <div className="">
                      <Image
                        src={data.character.images.webp.image_url}
                        alt={data.character.name}
                        width={250}
                        height={250}
                        priority
                        className="rounded-t-lg mx-auto w-full max-h-64 object-fill"
                      />
                      <p className="m-2 text-sm line-clamp-1">
                        {data.character.name}
                      </p>
                    </div>
                    <div className="text-center m-2 flex justify-center items-center">
                      <p className="text-xs">{data.role}</p>
                    </div>
                  </Link>
                  
                </div>
              );
            })}
            {characterStart + charactersPerPage < characters.length && (
            <div className="flex justify-center mb-10">
              <button
                className="bg-color-dark text-color-primary p-3 rounded-lg hover:bg-opacity-80"
                onClick={loadMoreCharacters}
              >
                Load More Characters
              </button>
            </div>
          )}
          </div>
          
          <div className="bg-color-dark rounded-lg text-md hover:bg-opacity-80 p-2 mb-2 inline-block">
            <a href={anime.url}>
              Official Website | {anime.title}
            </a>
          </div>
        </div>
      </div>
      <VideoPlayer youtubeId={anime.trailer.youtube_id} />
    </div>
  );
};

export default Page;
