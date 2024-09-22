import profile1 from "../../../assets/Home/Table/profile1.png";
import profile2 from "../../../assets/Home/Table/profile2.png";
import profile3 from "../../../assets/Home/Table/profile3.png";
import image from "../../../assets/Home/Table/AllImage.png";
import { useState } from "react";

export const HomeTable = () => {
  const [ClickNotificationBg, setClickNotificationBg] = useState(0);

  const userTable = [
    {
      id: 1,
      image: profile1,
      userName: "USERNAME",
      userID: "10",
      cDate: "2023-07-13 12:52",
      moreItemNumber: 470,
      arrayofData: "ユーザーのオークションの商品はありません",
      allImage: [
        {
          id: "1",
          image: image,
        },
        {
          id: "2",
          image: image,
        },
        {
          id: "3",
          image: image,
        },
        {
          id: "4",
          image: image,
        },
        {
          id: "5",
          image: image,
        },
      ],
    },
    {
      id: 2,
      image: profile2,
      userName: "USERNAME",
      userID: "10",
      cDate: "2023-07-13 12:52",
      moreItemNumber: 470,
      arrayofData: "ユーザーのオークションの商品はありません",
      allImage: [],
    },
    {
      id: 1,
      image: profile3,
      userName: "USERNAME",
      userID: "10",
      cDate: "2023-07-13 12:52",
      moreItemNumber: 470,
      arrayofData: "ユーザーのオークションの商品はありません",
      allImage: [
        {
          id: "1",
          image: image,
        },
        {
          id: "2",
          image: image,
        },
        {
          id: "3",
          image: image,
        },
        {
          id: "4",
          image: image,
        },
        {
          id: "5",
          image: image,
        },
      ],
    },
  ];

  return (
    <>
      {/* ------------ home page table Array ----------- */}
      <div className="HomeTable bg-[#fff] ">
        {Array.isArray(userTable) &&
          userTable.map((profile, index) => (
            <div
              key={index}
              className="px-[15px] relative border-b-[1px] border-t-[1px] border-[#757575] md:py-4 py-[10px] flex flex-col md:flex-row gap-4 items-center  md:px-[40px]"
            >
              {/* ------- left site table container ------ */}
              <div className="left-site-table relative flex flex-col md:flex-row gap-4 w-full md:w-[35%]">
                {/* Profile Section */}
                <div className="flex  items-start gap-3 md:w-[50%] ">
                  <img
                    src={profile?.image}
                    alt="Profile Image"
                    className="w-[80px] h-[80px] object-cover "
                  />
                  {/* Username */}
                  <div>
                    <h1 className="text-[14px] font-medium text-[#46AEF7]">
                      USERNAME
                    </h1>
                    <span className="text-[14px] font-medium text-[#46AEF7]">
                      評価: 10
                    </span>
                    <div
                      className={`flex md:hidden text-sm font-[500] text-[#757575]  md:w-[50%]   justify-center `}
                    >
                      2023-07-13 12:52
                    </div>
                  </div>
                </div>

                {/* Date Section */}
                <div
                  className={`hidden md:flex text-sm font-[500] text-[#757575]  md:w-[50%]   justify-center `}
                >
                  2023-07-13 12:52
                </div>
                {/* Notification Button */}
                <div className="md:hidden absolute bottom-0 right-0 flex flex-col justify-center items-center space-x-1">
                  <div
                    onClick={() => setClickNotificationBg(index)}
                    className={`${
                      ClickNotificationBg === index
                        ? "bg-[#46AEF7] text-[#ffff] "
                        : "bg-transparent text-[#757575] border-[1px] border-[#757575]"
                    } p-[2px] cursor-pointer w-[47px] h-[47px] flex flex-col justify-center items-center rounded-[5px]`}
                  >
                    <div className="rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="25"
                        viewBox="0 0 23 26"
                        fill="none"
                      >
                        <path
                          d="M11.4953 25.7577C11.9099 25.7575 12.3204 25.6757 12.7034 25.517C13.0864 25.3582 13.4343 25.1255 13.7274 24.8323C14.0204 24.539 14.2529 24.1909 14.4114 23.8079C14.5699 23.4248 14.6515 23.0142 14.6513 22.5997H8.34033C8.34006 23.4368 8.67228 24.2397 9.26393 24.8319C9.85558 25.4241 10.6582 25.7571 11.4953 25.7577ZM22.1213 18.3727C21.1683 17.3487 19.3853 15.8077 19.3853 10.7617C19.3866 8.95129 18.7574 7.19699 17.6057 5.80021C16.454 4.40342 14.8518 3.45137 13.0743 3.10766V2.07866C13.0796 1.86816 13.0427 1.65872 12.9658 1.46269C12.889 1.26667 12.7736 1.08801 12.6266 0.937256C12.4796 0.786499 12.3039 0.666689 12.1099 0.584885C11.9158 0.503081 11.7074 0.460938 11.4968 0.460938C11.2863 0.460938 11.0778 0.503081 10.8838 0.584885C10.6898 0.666689 10.5141 0.786499 10.3671 0.937256C10.22 1.08801 10.1047 1.26667 10.0278 1.46269C9.95091 1.65872 9.91402 1.86816 9.91932 2.07866V3.10666C8.14189 3.45037 6.53966 4.40242 5.38796 5.79921C4.23626 7.19599 3.607 8.95029 3.60833 10.7607C3.60833 15.8077 1.82533 17.3477 0.872325 18.3717C0.596768 18.66 0.44371 19.0439 0.445325 19.4427C0.445456 19.6504 0.486553 19.8561 0.566264 20.0479C0.645976 20.2398 0.762736 20.414 0.909864 20.5607C1.05699 20.7073 1.2316 20.8235 1.42369 20.9026C1.61578 20.9817 1.82158 21.0222 2.02933 21.0217H20.9623C21.17 21.0221 21.3757 20.9815 21.5677 20.9023C21.7596 20.8232 21.9341 20.707 22.0811 20.5603C22.2282 20.4137 22.3448 20.2395 22.4245 20.0477C22.5041 19.8559 22.5452 19.6503 22.5453 19.4427C22.5479 19.0443 22.3959 18.6614 22.1213 18.3727Z"
                          fill={
                            ClickNotificationBg === index ? "#ffff" : "#757575"
                          }
                        />
                      </svg>
                    </div>
                    <span className="text-[12px] font-[400] ">ON</span>
                  </div>
                </div>
              </div>

              {/*------- right site table container Image Gallery map --------- */}
              <div className="right-site-table flex flex-col md:flex-row gap-3 md:gap-[50px] justify-between w-full md:w-[75%]">
                <div className="flex md:flex-wrap gap-2 ">
                  {profile?.allImage.length > 0 ? (
                    <>
                      {profile.allImage.map((item, index) => (
                        <img
                          key={index}
                          src={item?.image}
                          alt="Image"
                          className="w-10 h-10 md:w-20 md:h-20 object-cover"
                        />
                      ))}
                      <div className="w-full h-10 md:w-20 md:h-20 flex items-center justify-center bg-transparent border-b-[1px] border-r-[1px] border-t-[1px] border-[#E2E2E2]">
                        <h1 className="md:hidden text-[12px] font-normal text-start text-[#757575]">
                          +577 商品を出品中
                        </h1>
                        <h1 className="hidden md:block text-xs font-normal text-center text-[#757575]">
                          + ({profile?.moreItemNumber}{" "}
                          <br className="hidden md:block" /> more items)
                        </h1>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-start md:h-20 h-10">
                      <h1 className="text-sm font-medium text-[#757575]">
                        {profile?.arrayofData}
                      </h1>
                    </div>
                  )}
                </div>

                {/* Right Side Buttons */}
                <div className="flex justify-center items-center gap-x-[5px] lg:gap-x-[30px] ">
                  {/* Follow Button */}
                  <button className="bg-[#F7466F] text-white px-3 py-[6px] md:py-2 text-xs lg:text-[14px] font-medium">
                    - フォローをやめる
                  </button>

                  {/* Notification Button */}
                  <div className="hidden md:flex flex-col justify-center items-center space-x-1">
                    <div
                      onClick={() => setClickNotificationBg(index)}
                      className={`${
                        ClickNotificationBg === index
                          ? "bg-[#46AEF7] text-[#ffff] "
                          : "bg-transparent text-[#757575] border-[1px] border-[#757575]"
                      } p-[2px] cursor-pointer w-[47px] h-[47px] flex flex-col justify-center items-center rounded-[5px]`}
                    >
                      <div className="rounded-full ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="25"
                          viewBox="0 0 23 26"
                          fill="none"
                        >
                          <path
                            d="M11.4953 25.7577C11.9099 25.7575 12.3204 25.6757 12.7034 25.517C13.0864 25.3582 13.4343 25.1255 13.7274 24.8323C14.0204 24.539 14.2529 24.1909 14.4114 23.8079C14.5699 23.4248 14.6515 23.0142 14.6513 22.5997H8.34033C8.34006 23.4368 8.67228 24.2397 9.26393 24.8319C9.85558 25.4241 10.6582 25.7571 11.4953 25.7577ZM22.1213 18.3727C21.1683 17.3487 19.3853 15.8077 19.3853 10.7617C19.3866 8.95129 18.7574 7.19699 17.6057 5.80021C16.454 4.40342 14.8518 3.45137 13.0743 3.10766V2.07866C13.0796 1.86816 13.0427 1.65872 12.9658 1.46269C12.889 1.26667 12.7736 1.08801 12.6266 0.937256C12.4796 0.786499 12.3039 0.666689 12.1099 0.584885C11.9158 0.503081 11.7074 0.460938 11.4968 0.460938C11.2863 0.460938 11.0778 0.503081 10.8838 0.584885C10.6898 0.666689 10.5141 0.786499 10.3671 0.937256C10.22 1.08801 10.1047 1.26667 10.0278 1.46269C9.95091 1.65872 9.91402 1.86816 9.91932 2.07866V3.10666C8.14189 3.45037 6.53966 4.40242 5.38796 5.79921C4.23626 7.19599 3.607 8.95029 3.60833 10.7607C3.60833 15.8077 1.82533 17.3477 0.872325 18.3717C0.596768 18.66 0.44371 19.0439 0.445325 19.4427C0.445456 19.6504 0.486553 19.8561 0.566264 20.0479C0.645976 20.2398 0.762736 20.414 0.909864 20.5607C1.05699 20.7073 1.2316 20.8235 1.42369 20.9026C1.61578 20.9817 1.82158 21.0222 2.02933 21.0217H20.9623C21.17 21.0221 21.3757 20.9815 21.5677 20.9023C21.7596 20.8232 21.9341 20.707 22.0811 20.5603C22.2282 20.4137 22.3448 20.2395 22.4245 20.0477C22.5041 19.8559 22.5452 19.6503 22.5453 19.4427C22.5479 19.0443 22.3959 18.6614 22.1213 18.3727Z"
                            fill={
                              ClickNotificationBg === index
                                ? "#ffff"
                                : "#757575"
                            }
                          />
                        </svg>
                      </div>
                      <span className="text-[12px] font-[400] ">ON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* ----------- pagination section ---------- */}
      <div className="flex pt-[20px] pb-[10px] md:pt-[36px] justify-between">
        <h1 className="text-[10px] font-[500] text-[#757575]">
          合計 0 1 件中 0 1 - 10 件を表示 1
        </h1>
        <div className="flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.6667 12.6667V3.33337L3.33335 8.00004L10.6667 12.6667Z"
                fill="#757575"
              />
            </svg>
          </button>
          <span className="bg-[#757575] h-[16px] w-[18px] text-[#fff] text-[10px] font-[700] flex justify-center items-center">
            1
          </span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.33331 12.6667V3.33337L12.6666 8.00004L5.33331 12.6667Z"
                fill="#757575"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
