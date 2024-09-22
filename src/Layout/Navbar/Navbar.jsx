import { useState } from "react";
import { Section1 } from "../../Components/Navbar/Section1";
import { Section2 } from "../../Components/Navbar/Section2";
import { Section3 } from "../../Components/Navbar/Section3";
import { SmTopNavbar } from "../../Components/Navbar/SmTopNavbar";
import "./Navbar.css";
import Drawer from "./Drawer";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ------------- Start only Small Devices Top Color Navbar  -------- */}
      <div
        className="w-[100%] md:hidden  py-[10px] relative "
        style={{
          background: "linear-gradient(90deg, #42B2F1 0%, #20E1BA 100%)",
        }}
      >
        <SmTopNavbar isOpen={isOpen} menuToggle={menuToggle} />
      </div>
      {/* ------------- Small Device Menu Toggle Open --------- */}
      {isOpen && (
        <>
          <Drawer isOpen={isOpen} menuToggle={menuToggle} />
        </>
      )}

      {/* ------------- End only Small Devices Top Color Navbar   -------- */}

      <div className="w-[100%] bg-[#ffff] md:pt-[10px] px-[15px] md:px-[0]">
        <div className=" pb-[15px] maxWidth mx-auto bg-[#FFFFFF] relative ">
          {/* ----------- top navbar lg devices show ------ */}
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
