import { getAnimeResponse } from "@/app/libs/api.libs";
import Link from "next/link";

const Genre = async () => {
  const genre = await getAnimeResponse("genres/anime");

  return (
    <div>
      <div className="mt-10 bg-color-secondary mb-4 rounded-lg">
        <h1 className="text-2xl text-center text-color-dark rounded-t-md p-4 bg-[#ece48b] mb-3">
          Genre
        </h1>
        {genre.data.map((data) => {
          return (
            <div>
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
          );
        })}
      </div>
    </div>
  );
};

export default Genre;
