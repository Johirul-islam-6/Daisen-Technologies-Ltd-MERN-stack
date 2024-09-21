import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar/Navbar";

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
