export const HomeTable = () => {
  return (
    <>
      <div className="HomeTable">
        <div className="border-b-2 border-gray-300 py-4 flex gap-4 items-center px-[36px]">
          <div className="left-site-table md:flex gap-5 justify-between border w-[35%]">
            {/* <!-- Profile Section --> */}
            <div className="md:flex gap-5 justify-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile Image"
                className="w-[80px] h-[80px]  object-cover"
              />
              {/* <!-- Username --> */}
              <div>
                <a href="#" className="text-blue-500 font-bold">
                  USERNAME
                </a>
                <span className="text-gray-500 text-sm block">評価 : 10</span>
              </div>
            </div>

            {/* <!-- Date Section --> */}
            <div className="text-gray-400 text-sm">2023-07-13 12:52</div>
          </div>
          {/* <!-- Image Gallery Section --> */}

          <div className="right-site-table flex gap-5 justify-between  w-[65%]">
            <div className="col-span-2">
              <div className="flex space-x-2">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Image"
                  className="w-[80px] h-[80px] object-cover"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Image"
                  className="w-[80px] h-[80px] object-cover"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Image"
                  className="w-[80px] h-[80px] object-cover"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Image"
                  className="w-[80px] h-[80px] object-cover"
                />
                <img
                  src="https://via.placeholder.com/50"
                  alt="Image"
                  className="w-[80px] h-[80px] object-cover"
                />
                <div className="w-[80px] h-[80px] flex items-center justify-center bg-gray-400 text-gray-500">
                  + (470 more items)
                </div>
              </div>
            </div>

            {/* --------- right site button--------- */}
            <div className="flex justify-center items-center gap-x-8">
              {/* <!-- Follow Button --> */}
              <div className="flex justify-center items-center">
                <div className="flex justify-end items-center">
                  <button className="bg-red-500 text-[#fff] px-[10px] py-[6px] text-[14px] font-[500]">
                    - フォローをやめる
                  </button>
                </div>
              </div>

              {/* <!-- Notification Button --> */}
              <div className="flex flex-col justify-center items-center space-x-1">
                <div className="bg-blue-500 p-[2px] w-[47px] h-[47px] flex flex-col justify-center items-center rounded-[5px]">
                  <div className=" text-white rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="25"
                      viewBox="0 0 23 26"
                      fill="none"
                    >
                      <path
                        d="M11.4953 25.7577C11.9099 25.7575 12.3204 25.6757 12.7034 25.517C13.0864 25.3582 13.4343 25.1255 13.7274 24.8323C14.0204 24.539 14.2529 24.1909 14.4114 23.8079C14.5699 23.4248 14.6515 23.0142 14.6513 22.5997H8.34033C8.34006 23.4368 8.67228 24.2397 9.26393 24.8319C9.85558 25.4241 10.6582 25.7571 11.4953 25.7577ZM22.1213 18.3727C21.1683 17.3487 19.3853 15.8077 19.3853 10.7617C19.3866 8.95129 18.7574 7.19699 17.6057 5.80021C16.454 4.40342 14.8518 3.45137 13.0743 3.10766V2.07866C13.0796 1.86816 13.0427 1.65872 12.9658 1.46269C12.889 1.26667 12.7736 1.08801 12.6266 0.937256C12.4796 0.786499 12.3039 0.666689 12.1099 0.584885C11.9158 0.503081 11.7074 0.460938 11.4968 0.460938C11.2863 0.460938 11.0778 0.503081 10.8838 0.584885C10.6898 0.666689 10.5141 0.786499 10.3671 0.937256C10.22 1.08801 10.1047 1.26667 10.0278 1.46269C9.95091 1.65872 9.91402 1.86816 9.91932 2.07866V3.10666C8.14189 3.45037 6.53966 4.40242 5.38796 5.79921C4.23626 7.19599 3.607 8.95029 3.60833 10.7607C3.60833 15.8077 1.82533 17.3477 0.872325 18.3717C0.596768 18.66 0.44371 19.0439 0.445325 19.4427C0.445456 19.6504 0.486553 19.8561 0.566264 20.0479C0.645976 20.2398 0.762736 20.414 0.909864 20.5607C1.05699 20.7073 1.2316 20.8235 1.42369 20.9026C1.61578 20.9817 1.82158 21.0222 2.02933 21.0217H20.9623C21.17 21.0221 21.3757 20.9815 21.5677 20.9023C21.7596 20.8232 21.9341 20.707 22.0811 20.5603C22.2282 20.4137 22.3448 20.2395 22.4245 20.0477C22.5041 19.8559 22.5452 19.6503 22.5453 19.4427C22.5479 19.0443 22.3959 18.6614 22.1213 18.3727Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className="text-[12px] font-[400] text-[#fff]">ON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
