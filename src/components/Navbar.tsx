import { Heart, BellDot, Settings } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="max-w-screen w-full h-[127px] bg-white flex flex-wrap m-auto px-5 md:px-8 lg:px-16 xl:px-24 items-center overflow-x-hidden md:border-b md:border-b-gray-200 ">
      <div className="flex-col md:flex md:flex-row w-full md:justify-between items-center gap-4 md:gap-8 hidden">
        {/* Logo */}
        <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>

        {/* Search Bar */}
        <div>
          <Searchbar />
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 lg:gap-6">
          {/* Like */}
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <Heart className="h-11 w-14" />
          </Button>
          {/* Notification */}
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <BellDot className="h-11 w-14" />
          </Button>
          {/* Settings */}

          <Button
            variant={"outline"}
            size={"icon"}
            className="h-11 w-11 rounded-full text-[#596780]"
          >
            <Settings className="h-11 w-14" />
          </Button>
          {/* Profile */}

          <Image
            className="h-11 w-11"
            src="/assets/image.png"
            alt="profile"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Responsive Navbar for Small Screens */}
      <div className="md:hidden w-full mt-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-[#3563E9] text-3xl font-bold">MORENT</h1>
          {/* Hamburger Menu */}
          <Image
            className="h-11 w-11"
            src="/assets/image.png"
            alt="profile"
            width={100}
            height={100}
          />
        </div>
        <div className="my-3">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}
