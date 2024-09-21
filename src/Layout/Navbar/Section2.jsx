import { Link } from "react-router-dom";
import searchIcon from "../../assets/Navbar/search-icon.png";
import { useState } from "react";

import profile from "../../assets/Navbar/icon/profile.png";
import start from "../../assets/Navbar/icon/start.png";
import camera from "../../assets/Navbar/icon/camera.png";
import notification from "../../assets/Navbar/icon/notification.png";

export const Section2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [InputToggleDropdownOpen, setInputToggleDropdownOpen] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(0);
  // input field dropdown visibility
  const inputToggleDropdown = () => {
    setInputToggleDropdownOpen(!InputToggleDropdownOpen);
  };
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // ---------- Searching input dropdown -------
  const SearchInputDropdownContent = [
    {
      name: "Test one",
      Price: "4,450生",
    },
    {
      name: "Test Two",
      Price: "1,250生",
    },
    {
      name: "Test Three",
      Price: "550生",
    },
  ];

  // ---------- filtering dropdown -------
  const DropdownMenuContent = [
    {
      name: "全てのカテゴリ",
      Link: "category-name",
    },
    {
      name: "asdas",
      Link: "category-name",
    },
    {
      name: "全てのカテゴリ",
      Link: "category-name",
    },
  ];

  //   ---- right site icon ------

  const IconMenu = [
    {
      image: profile,
      title: "マイページ",
      link: "/",
    },
    {
      image: start,
      title: "ウォッチ",
      link: "/",
    },
    {
      image: camera,
      title: "出品",
      link: "/",
    },
  ];

  return (
    <div>
      <ul className="pt-[18px] first-navbar-section flex justify-between ">
        <div className="flex w-[100%] gap-5">
          {/* ---- input searching container----- */}
          <div className=" flex w-[60%] border-gray-600 border-[2px] relative">
            <div className="flex relative justify-between items-center  w-[100%]">
              {/* -------------- searching input field---------- */}
              <div className="input-field w-[68%] ">
                <input
                  onClick={inputToggleDropdown}
                  className="navbar-searching-field text-gray-400 w-[100%] ps-2"
                  type="search"
                  defaultValue={`${InputToggleDropdownOpen ? "" : "text"}`}
                  // disabled
                  placeholder="全てのカテゴリてカテゴリ"
                  style={{ outline: "none" }}
                />
                {/* searching input Dropdown Menu */}
                {!InputToggleDropdownOpen && (
                  <div className="absolute left-0 top-11  z-10 bg-white divide-y divide-gray-100 rounded-lg  w-[100%]">
                    <ul className="py-2 p-3 bg-[#ffff] border-gray-400 border-[1px] rounded-md">
                      <div className="pb-2 ">
                        <h1 className="text-gray-600">Test Category</h1>
                        <div className="w-[100%] h-[2px] bg-gray-300 mt-2"></div>
                      </div>

                      {SearchInputDropdownContent?.map((item, index) => (
                        <>
                          <li className="" key={index}>
                            <button
                              type="button"
                              className={` w-full flex justify-start  px-4 py-1 border-[#ffff] hover:border-gray-300 border-l-[2px] ${
                                index === focusedIndex ? "" : ""
                              } `}
                              onFocus={() => setFocusedIndex(index)}
                              onBlur={() => setFocusedIndex(null)}
                            >
                              <div className="flex gap-2">
                                <div className="w-[60px] h-[60px] bg-gray-300"></div>
                                <div className="">
                                  <p className="text-start text-gray-600 text-[17px]">
                                    {item?.name}
                                  </p>
                                  <h1 className="text-start font-bold text-[18px] text-[#F7466F]">
                                    {item?.Price}
                                  </h1>
                                </div>
                              </div>
                            </button>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* ----------  dropdown filter and searching button --------- */}
              <div className="w-[32%] flex gap-3  justify-end items-center">
                {/* Dropdown Button */}
                <div className="dropdown relative">
                  <button
                    id="dropdown-button"
                    type="button"
                    onClick={toggleDropdown}
                    className="search-dropdown-btn"
                  >
                    <h1 className="bg-[#e3e3e3] text-[#757575] p-1 px-3">
                      {" "}
                      全てのカテゴリ
                    </h1>
                  </button>
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 bg-[#ffff] border-gray-400 border-[1px] rounded-md">
                        {DropdownMenuContent?.map((item, index) => (
                          <li key={index}>
                            <button
                              type="button"
                              className={`inline-flex w-full px-4 py-2 ${
                                index === focusedIndex ? "bg-[#46AEF7]" : "" // Add your focus background color here
                              } `} // Optional initial bg color for first item
                              onFocus={() => setFocusedIndex(index)} // Set focused index when focused
                              onBlur={() => setFocusedIndex(null)} // Reset on blur
                            >
                              {item?.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="relative bg-[#464646] h-[42px] flex justify-center items-center w-[62px]"
                >
                  <img className="w-[33px] h-[32px]" src={searchIcon} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="navbar-right-section w-[40%] flex justify-between h-[45px]">
            <button
              id="dropdown-button"
              type="button"
              className="search-dropdown-btn"
            >
              <h1 className="bg-[#e3e3e3] text-[#757575] py-[3px] px-3">
                {" "}
                条件指定+
              </h1>
            </button>
            <div className="flex gap-6">
              {IconMenu?.map((menu, index) => (
                <li key={index} className="">
                  <Link
                    className="menu-link flex flex-col justify-center items-center"
                    to={"/"}
                  >
                    <img
                      className="w-[28px] h-[28px]"
                      src={menu?.image}
                      alt=""
                    />
                    <h1>{menu?.title}</h1>
                  </Link>
                </li>
              ))}
              <li className=" relative">
                <div className="absolute right-[-3px] top-[-7px] text-[11px] rounded-[32px] flex justify-center items-center bg-[#F7466F] w-[20px] h-[20px]">
                  3
                </div>
                <Link
                  className="menu-link flex flex-col justify-center items-center"
                  to={"/"}
                >
                  <img
                    className="w-[28px] h-[28px]"
                    src={notification}
                    alt=""
                  />
                  <h1>お知らせ</h1>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
