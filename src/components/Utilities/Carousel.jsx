"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const Carousels = ({ api }) => {
  const carouselItems = api.data?.map((anime, index) => (
    <>
      <div key={index} className="carousel-item">
        <Link href={`/anime/${anime.mal_id}`}>
          <div className="bg-[#141518] relative">
            <Image
              src={anime.images.webp.large_image_url}
              width={1000}
              height={1000}
              priority
              className="w-full opacity-15 absolute top-10 rounded-lg shadow-2xl object-cover"
            />
            <div className="mt-5">
              <div className="absolute top-4 left-4 flex">
                <Image
                  src={anime.images.webp.large_image_url}
                  width={1000}
                  height={1000}
                  priority
                  className="w-24 sm:w-33 lg:w-44 xl:w-65 rounded-md"
                />
                <div>
                  <p className="text-color-primary text-lg lg:text-3xl ml-10 mr-8 mt-10 line-clamp-1">
                    {anime.title}
                  </p>
                  <p className="text-color-variant text-xs lg:text-sm ml-10 mr-8 mt-1 line-clamp-1">
                    {anime.title_japanese}
                  </p>

                  <div className="flex gap-1">
                    <h1 className="capitalize bg-color-variant text-xs lg:text-sm inline-block font-semibold px-2 text-color-primary ml-10 rounded-sm mt-4">
                      {anime.type}
                    </h1>

                    {anime.genres.slice(0, 2).map((data, index) => {
                      return (
                        <p
                          key={index}
                          className="capitalize bg-color-variant text-xs lg:text-sm inline-block font-semibold px-1 text-color-primary rounded-sm mt-4 line-clamp-1"
                        >
                          {data.name}
                        </p>
                      );
                    })}
                  </div>
                  <h1 className="capitalize bg-[#ece48b] text-sm inline-block font-semibold px-2 text-color-dark ml-10 rounded-sm p-1 mt-4">
                    Upcoming
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  ));

  return (
    <div className="h-72 lg:h-96 mt-10 px-2 mb-10 relative">
      <Carousel onSlideChange={(index) => index}>{carouselItems}</Carousel>
    </div>
  );
};

export default Carousels;
