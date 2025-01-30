import TopBar from "../../components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import PopularCars from "./PopularCars";
import RecommendedCars from "./RecommendedCars";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HomePage() {
  return (
    <section className="max-w-[1440px] overflow-x-hidden">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Home Car Rent" />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="m-auto">
        <Hero />
      </div>

      {/* Catalogue */}
      <div className="m-auto">
        <PopularCars />
        <RecommendedCars />

        <div className="w-full md:w-[734px] h-11 flex items-center my-[25px] m-auto">
          <Link href="/category">
            <Button className="w-[156px] h-11 bg-[#3563E9] text-white rounded hover:bg-[#3159d1] mx-auto ml-20 md:ml-72 lg:ml-80 xl:ml-[295px]">
              Show More Car
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
