import { getAnimeResponse } from "@/app/libs/api.libs";
import Link from "next/link";

const Genre = async () => {
  let genre;
  try {
    genre = await getAnimeResponse("genres/anime");
  } catch (error) {
    // Handle the error gracefully without logging to the console
    return (
      <div>
        <h1 className="text-2xl text-center text-color-dark rounded-t-md p-4 bg-[#ece48b] mb-3">
          Error
        </h1>
        <p className="text-center">Failed to load genres. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-10 bg-color-secondary mb-4 rounded-lg">
        <h1 className="text-2xl text-center text-color-dark rounded-t-md p-4 bg-[#ece48b] mb-3">
          Genre
        </h1>
        {genre.data?.map((data) => (
          <Link
            key={data.mal_id}
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
        ))}
      </div>
    </div>
  );
};

export default Genre;