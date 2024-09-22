import "./Navbar.css";
import { Section1 } from "./Section1";

import { Section2 } from "./Section2";
import { Section3 } from "./section3";
import { SmTopNavbar } from "./SmTopNavbar";

export const Navbar = () => {
  return (
    <>
      {/* ------------- only display show Sm divice -------- */}
      <div
        className="w-[100%] md:hidden  py-[10px] relative "
        style={{
          background: "linear-gradient(90deg, #42B2F1 0%, #20E1BA 100%)",
        }}
      >
        <SmTopNavbar />
      </div>

      <div className="w-[100%] bg-[#ffff] md:pt-[10px] px-[15px] md:px-[0]">
        <div className=" pb-[15px] maxWidth mx-auto bg-[#FFFFFF] relative ">
          {/* ----------- navbar 1st section ------ */}
          <div className="hidden md:block">
            <Section1 />
          </div>

          {/* ------------ navbar 2nd section -------- */}
          <Section2 />
          {/* -------------- navbar 3rd section --------- */}
          <Section3 />
        </div>
      </div>
    </>
  );
};
