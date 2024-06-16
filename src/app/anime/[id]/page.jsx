import { getAnimeResponse } from "@/app/libs/api.libs";
import Image from "next/image";
import { Trophy } from "@phosphor-icons/react/dist/ssr";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import { UserPlus } from "@phosphor-icons/react/dist/ssr";
import { HourglassHigh } from "@phosphor-icons/react/dist/ssr";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const characters = await getAnimeResponse(`anime/${id}/characters`);

  return (
    <>
      <div className="flex-wrap sm:flex-nowrap flex justify-center">
        <div className="rounded bg-color-secondary mr-3 ml-3 mt-10 p-10 w-full md:max-w-60 sm:max-w-60">
          <Image
            src={anime.data.images.webp.large_image_url}
            alt={anime.data.title}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full md:max-w-60"
          />
          <div className="text-color-primary mt-7 rounded-lg">
            <p className="m-1">{anime.data.rating}</p>
            <p className="m-1 flex gap-1">
              <HourglassHigh size={20} color="#ffffff" weight="fill" />
              {anime.data.duration}
            </p>
            {anime.data.score ? (
              <p className="flex gap-1 m-1">
                <Star size={20} color="#ffffff" weight="fill" />
                {anime.data.score} / 10 ({anime.data.scored_by})
              </p>
            ) : (
              <p className="flex gap-1 m-1">
                <Star size={20} color="#ffffff" weight="fill" />
                N/A
              </p>
            )}
            {anime.data.rank ? (
              <p className="flex gap-1 m-1">
                <Trophy size={20} color="#ffffff" />#{anime.data.rank}
              </p>
            ) : (
              <p className="flex gap-1 m-1">
                <Trophy size={20} color="#ffffff" />
                N/A{anime.data.rank}
              </p>
            )}

            <p className="flex gap-1 m-1">
              <UserPlus size={20} color="#ffffff" weight="fill" />
              {anime.data.popularity}
            </p>
            <p className="flex gap-1 m-1">
              <ThumbsUp size={20} color="#ffffff" weight="fill" />
              {anime.data.favorites}
            </p>
            <p className="mt-8 underline underline-offset-4 rounded w-15 justify-center items-center text-center px-1">
              {anime.data.status}
            </p>
          </div>
        </div>

        <div className="bg-color-secondary mr-3 ml-3 mt-10 rounded-lg">
          <div className="ml-10 mr-10 mt-4 text-color-primary pb-3">
            <h1 className="text-2xl">{anime.data.title_english}</h1>
            <h1 className="text-sm text-color-variant mb-2 line-clamp-1">
              {anime.data.title_japanese}
            </h1>
            <div className="flex-wrap flex text-sm gap-2 items-center mt-1">
              <span className="rounded border w-11 justify-center items-center text-center">
                {anime.data.aired.prop.from.year}
              </span>
              {anime.data.episodes ? (
                <span className="border rounded w-20 justify-center items-center text-center">
                  <p className=""> {anime.data.episodes} Episodes</p>
                </span>
              ) : (
                <></>
              )}

              {anime.data.genres.map((data, index) => {
                return (
                  <div key={index}>
                    <p className="border rounded w-15 px-1">{data.name}</p>
                  </div>
                );
              })}
              <p className="border rounded w-15 justify-center items-center text-center px-1">
                {anime.data.type}
              </p>
            </div>
            <h1 className="text-xl mr-2 mt-6 mb-1">Synopsis</h1>
            <p className="font-extralight mb-10">{anime.data.synopsis}</p>
            <h1 className="text-xl mr-2 mt-6 mb-1">Characters</h1>
            <div className="grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 overflow-auto h-max mb-10 max-h-96">
              {characters.data?.map((data, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={`/characters/${data.character.mal_id}`}
                      className="rounded-lg grid bg-color-dark flex-wrap "
                    >
                      <div className="">
                        <Image
                          src={data.character.images.webp.image_url}
                          alt="..."
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
            </div>
            <div className="bg-color-dark rounded-lg text-md hover:bg-opacity-80 p-2 mb-2 inline-block">
              <a href={anime.data.url}>
                Official Website | {anime.data.title}
              </a>
            </div>
          </div>
        </div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
