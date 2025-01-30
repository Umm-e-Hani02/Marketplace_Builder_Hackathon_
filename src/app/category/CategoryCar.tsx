import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Car {
  _id: string;
  name: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: string;
  originalPrice: string;
  image_url: string;
  slug: string;
}

export default async function CategoryCar() {
  const cars = await client.fetch(
    `*[_type=='car'][7...16]
  {
    _id,
    _type,
    name,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    "image_url":image.asset->url,
    "slug": slug.current
}`
  );
  return (
    <>
      <div className="flex justify-between px-5 md:px-16 my-8 md:my-5">
        <h3 className="text-[#90A3BF] lg:ml-24 xl:ml-0">Recommended Car</h3>
      </div>

      {/* For large screens */}
      <div className="md:grid md:grid-cols-2 md:m-auto xl:grid-cols-3 px-5 gap-x-7 hidden">
        {cars.map((car: Car) => (
          <div
            key={car._id}
            className="md:w-[304px] h-[300px] md:h-[410px] rounded-md flex flex-col bg-white p-5 mx-auto mb-5"
          >
            {/* Header Section */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h2 className="text-[#1A202C] font-bold text-xl flex flex-col">
                  {car.name}
                  <span className="text-[#90A3BF] font-bold text-sm">
                    {car.type}
                  </span>
                </h2>
              </div>
            </div>

            {/* Image Section */}
            <div className="my-8 sm:my-16 flex justify-center">
              <Image
                src={car.image_url}
                alt={car.name}
                height={200}
                width={200}
              />
            </div>

            <div className="flex gap-x-1 text-nowrap md:gap-4 mb-5 justify-center sm:justify-start">
              <p className="text-[#90A3BF] flex items-center md:gap-2 text-xs sm:text-base">
                <Image
                  src="/assets/gas-station.png"
                  alt="Gasoline"
                  height={200}
                  width={200}
                  className="w-6 h-6"
                />
                {car.fuelCapacity}
              </p>
              <p className="text-[#90A3BF] flex items-center md:gap-2 text-xs sm:text-base">
                <Image
                  src="/assets/manual.png"
                  alt="Car"
                  height={200}
                  width={200}
                  className="w-6 h-6"
                />
                {car.transmission}
              </p>
              <p className="text-[#90A3BF] flex items-center md:gap-2 text-xs sm:text-base">
                <Image
                  src="/assets/people.png"
                  alt="Capacity"
                  height={200}
                  width={200}
                  className="w-6 h-6"
                />
                {car.seatingCapacity}
              </p>
            </div>

            <div className="flex md:justify-between items-center mb-4 gap-x-1">
              <div className="flex flex-col">
                <div>
                  <p className="text-[#1A202C] font-bold text-xl md:text-2xl">
                    {car.pricePerDay}
                  </p>
                  <del className="text-sm text-[#90A3BF]">
                    {car.originalPrice}
                  </del>
                </div>
              </div>
              <Link href={`/detail/${car.slug}`}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs md:text-base w-[116px] h-9 md:h-11 rounded-md text-center text-white hover:scale-105">
                  Rent Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* For small screens */}
      <div className="md:hidden px-3">
        {cars.map((car: Car) => (
          <div
            key={car._id}
            className="w-full bg-white rounded-lg shadow-lg flex flex-col my-4 p-5"
          >
            {/* Header Section */}
            <div className="flex justify-between items-center mb-3 text-nowrap">
              <div className="flex flex-col">
                <h2 className="text-[#1A202C] font-bold text-lg flex flex-col">
                  {car.name}
                  <span className="text-[#90A3BF] font-bold text-sm">
                    {car.type}
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex justify-between gap-x-3">
              {/* Image Section */}
              <div>
                <Image
                  src={car.image_url}
                  alt={car.name}
                  height={200}
                  width={200}
                  className="hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-center gap-2 text-nowrap">
                <p className="flex items-center gap-x-1 text-sm text-[#90A3BF]">
                  <Image
                    src="/assets/gas-station.png"
                    alt="Gasoline"
                    height={200}
                    width={200}
                    className="w-4 h-4"
                  />
                  {car.fuelCapacity}
                </p>
                <p className="flex items-center gap-x-1 text-sm text-[#90A3BF]">
                  <Image
                    src="/assets/manual.png"
                    alt="Car"
                    height={200}
                    width={200}
                    className="w-4 h-4"
                  />
                  {car.transmission}
                </p>
                <p className="flex items-center gap-x-1 text-sm text-[#90A3BF]">
                  <Image
                    src="/assets/people.png"
                    alt="Capacity"
                    height={200}
                    width={200}
                    className="w-4 h-4"
                  />
                  {car.seatingCapacity}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex flex-col">
                <div>
                  <p className="text-[#1A202C] font-bold text-xl">
                    {car.pricePerDay}
                  </p>
                  <del className="text-sm text-[#90A3BF]">
                    {car.originalPrice}
                  </del>
                </div>
              </div>
              <Link href={`/deatil/${car.slug}`}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-xs md:text-base w-[116px] h-9 md:h-11 rounded-md text-center text-white hover:scale-105">
                  Rent Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
