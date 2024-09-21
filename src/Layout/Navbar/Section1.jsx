import { Link } from "react-router-dom";

export const Section1 = () => {
  return (
    <div>
      <ul className="first-navbar-section flex justify-between ">
        {/* -------- navbar first left section --------- */}
        <div className="left-site-div flex gap-x-[130px]">
          <li>
            <Link className="Logo uppercase" to={"/"}>
              Logo
            </Link>
          </li>
          <li>
            <p className="topNav-title">
              フィギュア・ホビー＆生物に特化したオークションサイト
            </p>
            <Link className="link" to={"/"}>
              ログアウト
            </Link>
          </li>
        </div>

        <div className="navbar-right-section">
          <li className="flex gap-2">
            <Link className="text-[#46AEF7]  font-bold" to={"/"}>
              初めての方へ
            </Link>
            <p className="text-[#757575] text-[14px] font-bold">｜</p>
            <Link className="link" to={"/"}>
              ヘルプ
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};
