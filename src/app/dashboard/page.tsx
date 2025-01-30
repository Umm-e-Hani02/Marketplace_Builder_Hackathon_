import TopBar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import DashboardSidebar from "./DashboardSidebar";
import ResponsiveNavbar from "./DashboardResponsivenavbar";
import Rental from "./Rental";
import Transaction from "./Transaction";
export default function Dashboard() {
  return (
    <section className="">
      {/* TopBar */}
      <TopBar heading="High Fidelity Dashboard - Admin Car Rent" />
      <div className="hidden lg:flex">
        <Navbar />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* SideNavbar */}
        <DashboardSidebar />
        <ResponsiveNavbar />
        <div className="flex mx-3 flex-col lg:flex-row">
          <Rental />
          {/* Transaction */}
          <Transaction />
        </div>
      </div>
    </section>
  );
}
