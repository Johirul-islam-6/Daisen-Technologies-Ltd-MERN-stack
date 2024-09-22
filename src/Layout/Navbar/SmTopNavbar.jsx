import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import menubar from "../../assets/Navbar/icon/menu.png";
export const SmTopNavbar = () => {
  return (
    <div className="maxWidth mx-auto px-[15px]">
      <ul className=" first-navbar-section w-[100%] flex justify-between ">
        {/* -------- navbar first left section --------- */}
        <div className="flex left-site-div  md:gap-x-[130px]">
          <li>
            <Link
              className="uppercase text-[20px] font-[500] text-[#ffff]"
              to={"/"}
            >
              Logo
            </Link>
          </li>
        </div>

        <div className="navbar-right-section">
          <div className="flex items-center h-[100%] gap-2">
            <div className=" gap-[12px] md:hidden flex items-center ">
              <Link className="text-[#ffff] text-[12px] font-[700]" to={"/"}>
                ログアウト
              </Link>

              <li className=" relative">
                <div className="absolute right-[-1px] top-[-12px] text-[8px] rounded-[32px] flex justify-center items-center bg-[#F7466F] w-[15px] h-[15px]">
                  3
                </div>
                <Link
                  className="menu-link flex flex-col justify-center items-center"
                  to={"/"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                  >
                    <path
                      d="M13.25 13.5C13.25 13.6989 13.329 13.8897 13.4697 14.0303L15.1893 15.75H0.810661L2.53033 14.0303C2.67098 13.8897 2.75 13.6989 2.75 13.5V8.5C2.75 5.68156 4.21828 3.49138 6.67291 2.9098C7.01115 2.82965 7.25 2.5276 7.25 2.18V1.5C7.25 1.08421 7.58421 0.75 8 0.75C8.41579 0.75 8.75 1.08421 8.75 1.5V2.18C8.75 2.52738 8.98855 2.8293 9.32651 2.90966C11.7722 3.49115 13.25 5.69222 13.25 8.5V13.5ZM8.99726 18.25C8.76827 18.5529 8.40537 18.75 8 18.75C7.58969 18.75 7.22724 18.5533 6.99971 18.25H8.99726Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>

              <Link className="link flex justify-center items-center" to={"/"}>
                {/* <FaBars className="text-[#ffff] text-[22px] font-[400]" /> */}
                <img src={menubar} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
