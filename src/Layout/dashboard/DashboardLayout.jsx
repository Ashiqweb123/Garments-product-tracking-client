import { Outlet } from "react-router";
import Sidebar from "../../Component/Dashboard/Menu/Sidebar";
import Navbar from "../../Pages/Shared/Nav/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white">
      {/* Left Side: Sidebar Component */}
      <Sidebar />

      {/* Right Side: Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Navbar on top */}
        <Navbar />

        {/* Dynamic content in the middle */}
        <main className="flex-1 p-5">
          <Outlet />
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
