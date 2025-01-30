import Image from "next/image";
import Link from "next/link";
export default function DashboardSidebar() {
  return (
    <section className="w-full bg-[#F6F7F9] overflow-x-hidden hidden lg:flex lg:flex-col">
      {/* Main Content */}
      <div className="hidden md:flex">
        {/* Sidebar */}
        <nav className="w-[286px] lg:w-[205px] xl:w-[286px] h-[910px] bg-[#FFFFFF]">
          <div className="w-[220px] mx-auto py-10">
            {/* Main Menu */}
            <div className="mb-8">
              <p className="text-[#94A7CB] text-[12px] mb-4 lg:px-2 xl:px-0">
                MAIN MENU
              </p>
              <div className="flex flex-col gap-4 lg:px-2 xl:px-0 lg:text-sm xl:text-base ">
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
                  { href: "", src: "/assets/calendar.png", label: "Calendar" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-2 p-2 lg:w-44 xl:w-full rounded-xl ${
                      item.label === "Dashboard"
                        ? "bg-[#3563E9] text-white"
                        : "text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      height={22}
                      width={22}
                    />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div>
              <p className="text-[#94A7CB] text-[12px] mb-4 lg:px-2 xl:px-0">
                PREFERENCES
              </p>
              <div className="flex flex-col gap-4 lg:px-2 xl:px-0 lg:text-sm xl:text-base">
                {[
                  { href: "", src: "/assets/setting.png", label: "Settings" },
                  {
                    href: "",
                    src: "/assets/info-circle.png",
                    label: "Help & Center",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      aria-label={item.label}
                      height={21}
                      width={21}
                    />
                    {item.label}
                  </Link>
                ))}

                {/* Dark Mode Toggle */}
                <div className="flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white">
                  <Image
                    src="/assets/briefcase.png"
                    alt="Dark Mode"
                    height={22}
                    width={22}
                  />
                  Dark Mode
                  <Image
                    className="ml-auto lg:pr-1 hover:cursor-pointer"
                    src="/assets/darklight-mode.png"
                    alt="Toggle Dark Mode"
                    height={65}
                    width={65}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-10">
            <p className="w-56 flex items-center gap-2 p-2 rounded-xl text-[#90A3BF] hover:bg-[#3563E9] hover:text-white ml-6 lg:ml-2 xl:ml-6">
              <Image
                src="/assets/logout.png"
                alt="Log Out"
                aria-label="Log Out"
                height={23}
                width={23}
              />
              Log Out
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}
