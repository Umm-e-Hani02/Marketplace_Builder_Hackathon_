import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex justify-center mt-6 flex-col">
      {/* ADS */}
      <div className="flex gap-5 justify-center">
        <Image
          src="/assets/ad1.png"
          alt="ad1"
          height={900}
          width={900}
          className="w-[582px] lg:w-[480px] lg:h-[250px] xl:w-[640px] xl:h-[350px] px-3"
        />
        <Image
          src="/assets/ad2.png"
          alt="ad2"
          height={900}
          width={900}
          className="hidden lg:flex lg:w-[480px] lg:h-[250px] xl:w-[640px] xl:h-[350px]"
        />
      </div>

      <div className="lg:flex-row flex justify-around mt-7 xl:mx-16 lg:mx-7 flex-col gap-5 lg:gap-10">
        {/* Pick up */}
        <div className="w-[285px] md:w-[500px] lg:w-[600px] h-[132px] bg-[#FFFFFF] rounded-lg px-6 m-auto">
          <div className="flex pt-2">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Pick-Up</label>
          </div>
          <div className="flex mt-4 m-auto justify-center items-center ">
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold text-sm md:text-base pl-3">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  <SelectItem value="quetta">Quetta</SelectItem>
                  <SelectItem value="peshawar">Peshawar</SelectItem>
                  <SelectItem value="multan">Multan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Date */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold text-sm md:text-base pl-3">
                Date
              </legend>
              <Input type="date" className="text-xs text-gray-400 mt-2 p-0 gap-0 border-none" />
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Time */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold text-sm md:text-base pl-3">
                Time
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none">
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1:00</SelectItem>
                  <SelectItem value="2">2:00</SelectItem>
                  <SelectItem value="3">3:00</SelectItem>
                  <SelectItem value="4">4:00</SelectItem>
                  <SelectItem value="5">5:00</SelectItem>
                  <SelectItem value="6">6:00</SelectItem>
                  <SelectItem value="7">7:00</SelectItem>
                  <SelectItem value="8">8:00</SelectItem>
                  <SelectItem value="9">9:00</SelectItem>
                  <SelectItem value="10">10:00</SelectItem>
                  <SelectItem value="11">11:00</SelectItem>
                  <SelectItem value="12">12:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="lg:mt-6 text-center m-auto my-3">
          <button className="bg-[#3563E9] h-[60px] w-[60px] rounded-lg flex items-center justify-center hover:bg-[#2858eb]">
            <Image
              src="/assets/swap.png"
              alt="swipe"
              height={100}
              width={100}
              className="h-[24px] w-[24px]"
            />
          </button>
        </div>

        {/* Drop off */}
        <div className="w-[295px] md:w-[500px] lg:w-[600px] h-[132px] bg-[#FFFFFF] rounded-lg px-6 m-auto">
          <div className="flex pt-2">
            <input type="radio" name="select" />
            <label className="font-semibold ml-3">Drop-Off</label>
          </div>
          <div className="flex mt-4 m-auto justify-center items-center">
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold text-sm md:text-base pl-3">
                Locations
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="karachi">Karachi</SelectItem>
                  <SelectItem value="lahore">Lahore</SelectItem>
                  <SelectItem value="islamabad">Islamabad</SelectItem>
                  <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  <SelectItem value="quetta">Quetta</SelectItem>
                  <SelectItem value="peshawar">Peshawar</SelectItem>
                  <SelectItem value="multan">Multan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Date */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold text-sm md:text-base pl-3">
                Date
              </legend>
              <Input type="date" className="text-xs text-gray-400 mt-2 p-0 gap-0 border-none"/>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-10 bg-gray-200 mr-3"></div>

            {/* Time */}
            <div className="w-1/3">
              <legend className="text-[#1A202C] font-semibold text-sm md:text-base pl-3">
                Time
              </legend>
              <Select>
                <SelectTrigger className="text-[#90A3BF] mt-2 focus:outline-none border-none">
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1:00</SelectItem>
                  <SelectItem value="2">2:00</SelectItem>
                  <SelectItem value="3">3:00</SelectItem>
                  <SelectItem value="4">4:00</SelectItem>
                  <SelectItem value="5">5:00</SelectItem>
                  <SelectItem value="6">6:00</SelectItem>
                  <SelectItem value="7">7:00</SelectItem>
                  <SelectItem value="8">8:00</SelectItem>
                  <SelectItem value="9">9:00</SelectItem>
                  <SelectItem value="10">10:00</SelectItem>
                  <SelectItem value="11">11:00</SelectItem>
                  <SelectItem value="12">12:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
