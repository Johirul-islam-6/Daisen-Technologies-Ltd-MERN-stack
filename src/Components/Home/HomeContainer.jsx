import { useState } from "react";
import "./HomeContainer.css";
import { FaEllipsisV } from "react-icons/fa";
export const HomeContainer = () => {
  const [focusedIndex, setFocusedIndex] = useState(1);

  // ---------- button --------

  const HomeContainerButton = [
    {
      name: " フォロワー",
      value: "1",
    },
    {
      name: " フォロー",
      value: "2",
    },
  ];
  return (
    <>
      <div className="flex md:block justify-between h-[50px] md:h-[auto] items-center py-[3px] md:py-[0] px-[15px] md:px-[0]">
        {/* -----------top Heading --------- */}
        <h2 className="HomeContainer-Heading md:text-[24px] text-[16px]  border-l-[4px] md:border-l-[10px] border-[#46AEF7] ps-[15px]">
          フォローリスト
        </h2>
        <h2 className="flex md:hidden text-[#46AEF7] ">
          <FaEllipsisV />
        </h2>
        {/* ------------ home container button ------ */}
        <div className="hidden md:flex gap-[13px] mt-[30px]">
          {HomeContainerButton?.map((button, index) => (
            <button
              onClick={() => setFocusedIndex(index)}
              key={index}
              className={`home-container-btn w-[159px] h-[33px] border-[2px] 
          font-[700] text-[14px]  rounded-[3px] ${
            focusedIndex === index
              ? "bg-[#46AEF7] text-[#FFF]"
              : "text-[#46AEF7] border-[#46AEF7]"
          }
          `}
            >
              {button?.name}
            </button>
          ))}
        </div>
        {/* ----------- button total count item ------- */}
        <div className="hidden md:flex gap-[13px] mt-[6px]">
          <button className="w-[159px] h-[33px] text-[#757575] text-[12px] font-[400] ">
            TOTAL{" "}
            <span className="text-[14px] text-[#46AEF7] font-[700]">100</span>
          </button>
          <button className="w-[159px] h-[33px] text-[#757575] text-[12px] font-[400] ">
            TOTAL{" "}
            <span className="text-[14px] text-[#46AEF7] font-[700]">100</span>
          </button>
        </div>

        {/* --------------- driven ----------- */}
        <div className="hidden md:flex mt-[10px] py-[19px] px-[80px]  gap-[80px] border-t-[1px] border-b-[1px] border-[#757575]">
          <h1 className="text-[16px] font-[500] text-[#757575]">
            ユーザーネーム
          </h1>
          <h1 className="text-[16px] font-[500] text-[#757575]">
            フォローされた日
          </h1>
        </div>
      </div>
    </>
  );
};
