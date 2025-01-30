import Link from "next/link";
import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontalIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function ResponsiveNavbar() {
  return (
    <nav className="max-w-screen w-full h-[200px] bg-white flex flex-col lg:hidden">
      <div className="flex items-center justify-between w-full px-6 pt-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-gray-500" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="overflow-y-auto overflow-x-hidden"
          >
            <div className="w-[220px] mx-auto py-10">
              {/* Main Menu */}
              <div className="mb-8">
                <p className="text-[#94A7CB] text-[12px] mb-4">MAIN MENU</p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      href: "/dashboard",
                      src: "/assets/home.png",
                      label: "Dashboard",
                    },
                    { href: "", src: "/assets/car.png", label: "Car Rent" },
                    { href: "", src: "/assets/chart.png", label: "Insight" },
                    {
                      href: "",
                      src: "/assets/reimburse.png",
                      label: "Reimburse",
                    },
                    { href: "", src: "/assets/message.png", label: "Inbox" },
                    {
                      href: "",
                      src: "/assets/calendar.png",
                      label: "Calendar",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-2 p-2 rounded-xl ${
                        item.label === "Dashboard"
                          ? "bg-[#3563E9] text-white w-48"
                          : "text-[#90A3BF] hover:bg-[#3563E9] hover:text-white w-48"
                      }`}
                    >
                      <Image
                        width={23}
                        height={23}
                        src={item.src}
                        alt={item.label}
                      />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div>
                <p className="text-[#94A7CB] text-[12px] mb-4">PREFERENCES</p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      href: "",
                      src: "/assets/setting.png",
                      label: "Settings",
                    },
                    {
                      href: "",
                      src: "/assets/info-circle.png",
                      label: "Help & Center",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white w-48"
                    >
                      <Image
                        width={23}
                        height={23}
                        src={item.src}
                        alt={item.label}
                      />
                      {item.label}
                    </Link>
                  ))}

                  {/* Dark Mode Toggle */}
                  <div className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white">
                    <Image
                      width={23}
                      height={23}
                      src="/assets/briefcase.png"
                      alt="Dark Mode"
                      aria-label="Dark Mode"
                    />
                    Dark Mode
                    <img
                      className="ml-2 hover:cursor-pointer"
                      src="/assets/darklight-mode.png"
                      alt="Toggle Dark Mode"
                    />
                  </div>
                  <div className="mt-10 -ml-6">
                    <Link
                      href=""
                      className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white ml-6"
                    >
                      <Image
                        width={23}
                        height={23}
                        src="/assets/logout.png"
                        alt="Log Out"
                      />
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Image
          height={100}
          width={100}
          src="/assets/image.png"
          alt="Profile"
          className="h-11 w-11 rounded-full"
        />
      </div>
      <div className="pt-4">
        <Link href="/">
        <h1 className="text-[#3563E9] text-3xl font-bold pl-6">MORENT</h1>
        </Link>
      </div>
      <div className="px-6 pt-5">
        <div className="relative">
          <Search className="absolute mt-3 ml-5 text-[#596780]" />
          <div className="flex items-center">
            <Input
              placeholder="Search something here."
              className="w-full h-11 pl-12 border border-input"
            />
            <SlidersHorizontalIcon className="h-11 w-11 p-2 ml-2 text-[#596780] bg-white border rounded-md" />
          </div>
        </div>
      </div>
    </nav>
  );
}
