import "./Navbar.css";
import { Section1 } from "./Section1";

import { Section2 } from "./Section2";

export const Navbar = () => {
  return (
    <>
      <div className="border mt-10 maxWidth mx-auto bg-[#FFFFFF] relative ">
        {/* ----------- navbar first section ------ */}
        <Section1 />
        {/* ------------ navbar second section -------- */}
        <Section2 />
      </div>
    </>
  );
};
