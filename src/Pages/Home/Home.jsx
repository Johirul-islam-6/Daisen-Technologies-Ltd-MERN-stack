import { useState } from "react";
import "./Home.css";
import { IoSettingsOutline } from "react-icons/io5";
import { HomeContainer } from "../../Components/Home/HomeContainer";
import CategorySlider from "../../Components/Home/HomeTopBottom/CategorySlider";

export const Home = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [focusedIndex2, setFocusedIndex2] = useState(1);

  // --------- home top button --------
  const HomeTopButton = [
    { name: "マイページ", category: "1" },
    { name: "ウォッチリスト", category: "2" },
    { name: "入札中", category: "3" },
    { name: "落札済み", category: "4" },
    { name: "下書き", category: "5" },
    { name: "出品中", category: "6" },
    { name: "出品終了", category: "7" },
  ];

  // ---------- 2nd button -------
  const Home2ndButton = [
    { name: "検索条件", category: "1" },
    { name: "フォローリスト", category: "2" },
    { name: "設定", category: "3" },
  ];

  return (
    <div className="mt-[20px] home-page maxWidth mx-auto h-[100vh]">
      {/*------------ Home Top Button Section ------------ */}
      <div className="hidden md:grid grid-cols-7 bg-[#ffff] justify-center py-[20px] px-[27px] gap-[18px]">
        {HomeTopButton.map((button, index) => (
          <button
            key={index}
            onClick={() => setFocusedIndex(index)} // Set focused index when focused
            className={`home-top-button ${
              focusedIndex === index ? "bg-[#46AEF7] text-[#ffff]" : ""
            } text-[#333]`}
          >
            {button.name}
          </button>
        ))}
      </div>

      <div className="md:hidden flex">
        <CategorySlider HomeTopButton={HomeTopButton} />
      </div>

      {/*------------ Home 2nd Button Section -------------- */}
      <div className="grid grid-cols-3 justify-center py-[20px] gap-[21px]">
        {Home2ndButton.map((button, index) => (
          <button
            key={index}
            onClick={() => setFocusedIndex2(index)} // Set focused index when focused
            className={`h-[47px] py-[11px] rounded-md ${
              focusedIndex2 === index
                ? "bg-[#46AEF7] text-[#ffff]"
                : "bg-[#ffff]"
            } text-[#46AEF7]`}
          >
            <div className="flex justify-center items-center gap-1">
              {index === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M15.3309 8.66961C15.3309 9.98879 14.9399 11.2783 14.2074 12.3752C13.475 13.472 12.4339 14.3269 11.2159 14.8317C9.99783 15.3364 8.65756 15.4684 7.36456 15.211C6.07155 14.9535 4.88389 14.3181 3.95177 13.3852C3.01965 12.4523 2.38494 11.2638 2.12791 9.96992C1.87088 8.67605 2.00308 7.33498 2.50778 6.11629C3.01249 4.8976 3.86703 3.85605 4.96334 3.12335C6.05965 2.39065 7.34848 1.99972 8.66684 2C9.54215 2 10.4089 2.17251 11.2176 2.50769C12.0263 2.84287 12.7611 3.33415 13.38 3.95348C13.999 4.57281 14.4899 5.30807 14.8249 6.11726C15.1599 6.92645 15.3323 7.79374 15.3323 8.66961H15.3309Z"
                    stroke={focusedIndex2 === index ? "#ffff" : "#46AEF7"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9985 17L13.375 13.3743"
                    stroke={focusedIndex2 === index ? "#ffff" : "#46AEF7"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {index === 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  viewBox="0 0 22 14"
                  fill="none"
                >
                  <path
                    d="M6.59956 6.99902C7.36123 6.99929 8.10589 6.79421 8.73932 6.40973C9.37275 6.02524 9.86651 5.47863 10.1581 4.83903C10.4497 4.19944 10.5261 3.49559 10.3776 2.81654C10.2291 2.13748 9.86232 1.51372 9.32373 1.02415C8.78514 0.534587 8.09892 0.201217 7.35186 0.0662113C6.6048 -0.0687943 5.83048 0.000630102 5.12683 0.265703C4.42319 0.530775 3.82184 0.979587 3.39886 1.55536C2.97588 2.13114 2.75026 2.80801 2.75055 3.50036C2.75036 3.95986 2.84978 4.41489 3.04315 4.83945C3.23651 5.26401 3.52002 5.64977 3.87747 5.97468C4.23492 6.2996 4.65931 6.5573 5.12638 6.73306C5.59345 6.90882 6.09404 6.9992 6.59956 6.99902ZM9.23967 7.99883H8.95402C8.22147 8.32806 7.41528 8.49932 6.59808 8.49932C5.78089 8.49932 4.9747 8.32806 4.24215 7.99883H3.95944C2.9092 7.99919 1.9021 8.37867 1.1596 9.05383C0.417107 9.729 -7.25698e-08 10.6446 0 11.5992L0 12.4986C0 12.8966 0.173905 13.2782 0.483457 13.5596C0.793009 13.8409 1.21285 13.999 1.65063 13.999H11.55C11.9877 13.999 12.4076 13.8409 12.7171 13.5596C13.0267 13.2782 13.2006 12.8966 13.2006 12.4986V11.5992C13.2006 10.6443 12.7833 9.72856 12.0405 9.05336C11.2976 8.37816 10.2902 7.99883 9.23967 7.99883ZM16.4989 6.99902C17.1515 6.99902 17.7895 6.82311 18.3321 6.49353C18.8748 6.16395 19.2977 5.6955 19.5475 5.14743C19.7972 4.59936 19.8626 3.99627 19.7353 3.41444C19.6079 2.83261 19.2937 2.29816 18.8322 1.87868C18.3707 1.4592 17.7832 1.17168 17.1559 1.05187C16.5286 0.93206 15.8855 0.986886 15.2935 1.2101C14.7014 1.43332 14.1841 1.8156 13.7962 2.30791C13.4083 2.80021 13.1664 3.37869 13.1009 3.98814C13.0353 4.5976 13.1493 5.21505 13.4286 5.76345C13.7079 6.31185 14.1417 6.76674 14.6748 7.07383C15.2079 7.38091 15.8164 7.52573 16.432 7.49197L16.4989 6.99902ZM19.0489 7.99883H18.7557C18.0173 8.32912 17.2013 8.50051 16.3722 8.50051C15.5431 8.50051 14.7272 8.32912 13.9887 7.99883H13.6995C12.6427 7.99883 11.6289 8.38123 10.8829 9.06133C10.1368 9.74142 9.7207 10.6546 9.7207 11.5992V12.4986C9.7207 12.8966 9.89461 13.2782 10.2042 13.5596C10.5137 13.8409 10.9336 13.999 11.3713 13.999H21.2671C21.7048 13.999 22.1247 13.8409 22.4342 13.5596C22.7437 13.2782 22.9176 12.8966 22.9176 12.4986V11.5992C22.9176 10.6446 22.501 9.72902 21.7585 9.05383C21.016 8.37867 20.0089 7.99919 18.9587 7.99883H19.0489Z"
                    fill={focusedIndex2 === index ? "#ffff" : "#46AEF7"}
                  />
                </svg>
              )}

              {index === 2 && <IoSettingsOutline size={22} />}
              {button.name}
            </div>
          </button>
        ))}
      </div>

      <HomeContainer />
    </div>
  );
};
