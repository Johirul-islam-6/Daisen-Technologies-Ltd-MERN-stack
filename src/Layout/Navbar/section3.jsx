import { Link } from "react-router-dom";

export const Section3 = () => {
  return (
    <div>
      <div className="flex pt-[11px]">
        <button
          id="dropdown-button"
          type="button"
          className="search-dropdown-btn"
        >
          <h1 className="bg-[#e3e3e3] text-[#757575] py-[3px] px-3">
            {" "}
            保存した検索条件
          </h1>
        </button>

        <div className="flex gap-2 items-center ps-1">
          <Link to={""} className="link3rd">
            Text
          </Link>
          <Link to={""} className="link3rd">
            Text
          </Link>
          <Link to={""} className="link3rd">
            Text
          </Link>
          <Link to={""} className="link3rd">
            Text
          </Link>
          <Link to={""} className="link3rd">
            Text
          </Link>
        </div>
      </div>
    </div>
  );
};
