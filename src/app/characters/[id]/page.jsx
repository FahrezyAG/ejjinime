import { getAnimeResponse } from "@/app/libs/api.libs";
import Image from "next/image";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const character = await getAnimeResponse(`characters/${id}/full`);

  return (
    <div className="flex-wrap sm:flex-nowrap flex">
      <view className="rounded bg-color-secondary mr-3 ml-3 mt-10 p-10 w-full md:max-w-60 sm:max-w-60">
        <Image
          src={character.data.images.webp.image_url}
          alt="..."
          width="0"
          height="0"
          sizes="100vw"
          className="w-full md:max-w-60"
        />
        <div className="text-color-primary mt-7 rounded-lg">
          <p className="flex gap-1 m-1">
            <ThumbsUp size={20} color="#ffffff" weight="fill" />
            {character.data.favorites}
          </p>
        </div>
      </view>

      <div className="bg-color-secondary mr-3 ml-3 mt-10 rounded-lg">
        <div className="ml-10 mr-10 mt-4 text-color-primary">
          <h1 className="text-2xl">{character.data.name}</h1>
          <h1 className="text-xl mr-2 mt-6 mb-1">About</h1>
          <p className="font-extralight mb-10">{character.data.about}</p>
          <h1 className="text-2xl">From Anime:</h1>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 overflow-auto h-max mb-10 max-h-96">
            {character.data.anime.map((data, index) => {
              return (
                <div key={index}>
                  <Link
                    className="rounded-lg grid w-full bg-color-dark"
                    href={`/anime/${data.anime.mal_id}`}
                  >
                    <div>
                      <Image
                        src={data.anime.images.webp.image_url}
                        alt="..."
                        width={250}
                        height={250}
                        priority
                        className="rounded-t-lg mx-auto w-full max-h-64 object-fill"
                      />
                      <p className="m-2 line-clamp-1">{data.anime.title}</p>
                    </div>
                    <div className="relative left-0 bottom-0 p-1 rounded-tr-lg flex items-center font-medium pl-3 mb-1">
                      <p>{data.role}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <h1 className="text-2xl mt-10">Voice Actors</h1>
          <div className="grid mt-2 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4 overflow-auto h-max mb-10 max-h-96">
            {character.data.voices.map((data, index) => {
              return (
                <div key={index}>
                  <div className="rounded-lg grid w-full bg-color-dark">
                    <div>
                      <Image
                        src={data.person.images.jpg.image_url}
                        alt="..."
                        width={250}
                        height={250}
                        priority
                        className="rounded-t-lg mx-auto w-full max-h-64 object-fill"
                      />
                      <p className="m-2">{data.person.name}</p>
                    </div>
                    <div className="relative left-0 bottom-0 p-1 rounded-tr-lg flex items-center font-medium pl-3 mb-1">
                      <p>Language {data.language}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
