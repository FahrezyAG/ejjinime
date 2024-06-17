import AnimeList from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse } from "./libs/api.libs";
import Genre from "@/components/Utilities/Genres";
import Carousels from "@/components/Utilities/Carousel";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  const ongoingAnime = await getAnimeResponse("seasons/now", "limit=10");
  let upcomingAnime = await getAnimeResponse("seasons/upcoming", "limit=8");
  return (
    <>
      <section>
        <div>
          <Carousels api={upcomingAnime} />
        </div>
        <div className="flex-wrap sm:flex-nowrap justify-center flex p-2 lg:m-5">
          <div>
            <div>
              <Header
                title="Most Popular Anime"
                linkTitle="See All.."
                linkHref="/populer"
              />
              <AnimeList api={topAnime} />
            </div>

            <div className="mt-10">
              <Header title="On Going Anime" 
              linkTitle="See All.." 
                linkHref="/ongoing"
              />

              <AnimeList api={ongoingAnime} />
            </div>
          </div>
          <div className="w-full sm:w-48 xl:ml-4">
            <Genre/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
