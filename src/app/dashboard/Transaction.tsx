import { Circle } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default async function Transaction() {
  const query = await client.fetch(`*[_type == "dashboard"]{
  "Car Image": car.asset->url,
  carname,
  category,
  date,
  price
}
`);

  return (
    <div className="min-h-screen flex flex-col items-center mt-7 overflow-x-hidden">
      {/* Top 5 Car Rental */}
      <div className="w-[300px] md:w-[534px] lg:w-[390px] xl:w-[524px] md:h-[324px] bg-white rounded-lg p-6 mb-8">
        {/* Header */}
        <div className="flex items-center mb-6 justify-between">
          <h2 className="text-[#1A202C] font-bold text-lg">Top 5 Car Rental</h2>
          <span className="text-[#90A3BF] font-bold text-lg cursor-pointer">
            •••
          </span>
        </div>

        {/* Chart and Details */}
        <div className="flex items-center gap-x-2">
          {/* Chart */}
          <div className="relative md:h-[220px] flex items-center justify-center">
            <Image
              src="/assets/chart1.png"
              alt="Chart"
              width={240}
              height={240}
              className=""
            />
            <div className="absolute flex flex-col items-center">
              <span className="text-[#1A202C] font-bold text-lg md:text-xl lg:text-2xl">
                72,030
              </span>
              <span className="text-[#90A3BF] text-sm">Rental Car</span>
            </div>
          </div>

          {/* Car Stats */}

          <div className="w-64 md:w-72">
            <div className="flex justify-between mb-4">
              <span className="flex items-center text-[12px] md:text-base">
                <Circle fill="#0D3559" className="h-3 text-[#0D3559]" /> Sport
                Car
              </span>
              <span className="text-[12px] md:text-base">17,439</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="flex items-center text-[12px] md:text-base">
                <Circle fill="#175D9C" className="h-3 text-[#175D9C]" />
                SUV
              </span>
              <span className="text-[12px] md:text-base">9,478</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="flex items-center text-[12px] md:text-base">
                <Circle fill="#2185DE" className="h-3 text-[#2185DE]" />
                Coupe
              </span>
              <span className="text-[12px] md:text-base">18,197</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="flex items-center text-[12px] md:text-base">
                <Circle fill="#63A9E8" className="h-3 text-[#63A9E8]" />
                Hatchback
              </span>
              <span className="text-[12px] md:text-base">12,510</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center text-[12px] md:text-base">
                <Circle fill="#A6CEF2" className="h-3 text-[#A6CEF2]" />
                MPV
              </span>
              <span className="text-[12px] md:text-base">14,406</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="w-[300px] md:w-[534px] lg:w-[390px] xl:w-[524px] md:h-[480px] rounded-lg p-6 mb-10 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#1A202C] font-bold text-lg">
            Recent Transaction
          </h2>
          <span className="text-[#3563E9] cursor-pointer hover:text-[#2950c5]">
            View All
          </span>
        </div>
        <div className="w-[300px] md:h-[376px] md:w-[480px] lg:w-[360px] xl:w-[480px]">
          {query.map((dashboard: any, index: number) => (
            <div
              key={index}
              className="w-[300px] md:w-full -ml-6 md:-ml-0 flex items-center justify-between p-4 border-b border-gray-200"
            >
              {/* Car Image */}
              <Image
                src={dashboard["Car Image"]}
                alt={dashboard.carname}
                height={100}
                width={100}
                className="md:w-[132px] object-contain"
              />

              {/* Car Details */}
              <div className="flex-1 ml-2 md:ml-4">
                <h3 className="font-bold text-gray-800 text-xs md:text-base">
                  {dashboard.carname}
                </h3>
                <span className="text-gray-500 text-[11px] md:text-[14px]">
                  {dashboard.category}
                </span>
              </div>

              {/* Transaction Info */}
              <div className="text-right">
                <span className="block text-gray-500 text-[12px] md:text-[14px]">
                  {dashboard.date}
                </span>
                <h3 className="font-bold text-gray-800 text-sm">
                  {dashboard.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
