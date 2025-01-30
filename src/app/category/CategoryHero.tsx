import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function CategoryHero() {
  return (
    <div className="flex flex-col lg:flex-row lg:mx-2 items-center gap-x-2 mt-7 md:mx-auto">
      {/* Pick up */}
      <div className="w-[285px] md:w-[460px] lg:w-[350px] xl:w-[460px] h-[132px] bg-[#FFFFFF] rounded-lg px-5 m-auto">
        <div className="flex pt-4">
          <input type="radio" name="select" />
          <label className="font-semibold ml-3">Pick-Up</label>
        </div>

        <div className="flex mt-4 m-auto md:gap-x-4 items-center">
          <div className="w-[110px] h-[48px]">
            <legend className="text-[#1A202C] font-semibold text-sm md:text-base">
              Locations
            </legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none w-20 -ml-3 md:w-32 lg:w-20 xl:w-32">
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
          <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

          {/* Date */}
          <div className="w-[110px] h-[48px]">
            <legend className="text-[#1A202C] font-semibold text-sm md:text-base">
              Date
            </legend>
            <Input type="date" className="text-gray-400 text-xs p-0 md:text-[13px] lg:text-base border-none"/>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

          {/* Time */}
          <div className="w-[110px] h-[48px]">
            <legend className="text-[#1A202C] font-semibold text-sm md:text-base">
              Time
            </legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none w-20 -ml-3 md:w-32 lg:w-20 xl:w-32">
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

      {/* Swap button */}

      <div className="lg:mt-6 text-center m-auto my-3">
        <button className="bg-[#3563E9] h-[40px] w-[40px] rounded-lg flex items-center justify-center hover:bg-[#2858eb]">
          <Image
            src="/assets/swap.png"
            alt="swipe"
            height={100}
            width={100}
            className="h-[19px] w-[19px]"
          />
        </button>
      </div>

      {/* Drop off */}
      <div className="w-[285px] md:w-[460px] lg:w-[350px] xl:w-[460px] h-[132px] bg-[#FFFFFF] rounded-lg px-5 m-auto">
        <div className="flex pt-4">
          <input type="radio" name="select" />
          <label className="font-semibold ml-3">Drop-Off</label>
        </div>

        <div className="flex mt-4 m-auto md:gap-x-4 items-center">
          <div className="w-[110px] h-[48px]">
            <legend className="text-[#1A202C] font-semibold text-sm md:text-base">
              Locations
            </legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none w-20 -ml-3 md:w-32 lg:w-20 xl:w-32">
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
          <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

          {/* Date */}
          <div className="w-[110px] h-[48px]">
            <legend className="text-[#1A202C] font-semibold text-sm md:text-base">
              Date
            </legend>
            <Input type="date" className="text-gray-400 text-xs p-0 md:text-[13px] lg:text-base border-none"/>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-10 bg-gray-200 mr-2"></div>

          {/* Time */}
          <div className="w-[110px] h-[48px]">
            <legend className="text-[#1A202C] font-semibold text-sm md:text-base">
              Time
            </legend>
            <Select>
              <SelectTrigger className="text-[#90A3BF] focus:outline-none border-none w-20 -ml-3 md:w-32 lg:w-20 xl:w-32">
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
  );
}
