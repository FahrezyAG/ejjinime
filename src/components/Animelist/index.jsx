import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-5 md:gap-4 sm:gap-5 gap-5 md:px-4 px-2">
        {api.data?.map((anime, index) => {
          const airedYear = anime.aired?.prop?.from?.year;

          return (
            <div
              className="relative transition duration-300 ease-in-out hover:scale-105 mt-4 rounded-lg bg-color-secondary"
              key={index}
            >
              <Link
                href={`/anime/${anime.mal_id}`}
                className="text-color-primary hover:text-color-accent transition-all"
              >
                <div className="absolute text-color-secondary px-2 bg-opacity-90 bg-color-accent rounded-br-lg font-bold flex items-center justify-center shadow-xl">
                  {anime.rank ? <h1 className="">Rank #{anime.rank}</h1> : <p></p>}
                </div>
                <Image
                  src={anime.images.webp.image_url}
                  alt={anime.title}
                  width={400}
                  height={400}
                  priority
                  className="rounded-t-lg mx-auto w-full max-h-64 object-fill"
                />
                <h3 className="font-semibold text-md m-3 items-center mb-9 line-clamp-2">
                  {anime.title_english}
                </h3>
                <div className="absolute left-0 bottom-0 p-1 rounded-tr-lg flex items-center font-medium pl-3 mb-1">
                  <p className="text-sm">{airedYear}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
