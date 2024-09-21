import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <div className="all-Layout">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
