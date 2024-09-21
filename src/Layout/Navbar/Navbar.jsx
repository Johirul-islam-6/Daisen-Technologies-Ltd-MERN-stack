import "./Navbar.css";
import { Section1 } from "./Section1";

import { Section2 } from "./Section2";
import { Section3 } from "./section3";

export const Navbar = () => {
  return (
    <>
      <div className="w-[100%] bg-[#ffff]">
        <div className=" pb-[15px] maxWidth mx-auto bg-[#FFFFFF] relative ">
          {/* ----------- navbar 1st section ------ */}
          <Section1 />
          {/* ------------ navbar 2nd section -------- */}
          <Section2 />
          {/* -------------- navbar 3rd section --------- */}
          <Section3 />
        </div>
      </div>
    </>
  );
};
