/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Drawer({ menuToggle, isOpen }) {
  const IconMenu = [
    {
      title: "マイページ",
      link: "/",
    },
    {
      title: "ウォッチ",
      link: "/",
    },
    {
      title: "出品",
      link: "/",
    },
  ];

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <main
        style={{
          background: "linear-gradient(90deg, #42B2F1 0%, #20E1BA 100%)",
        }}
        className="w-[80%] h-[100vh] absolute z-[1000] right-0"
      >
        <div className="flex flex-col px-5 gap-2 hover:underline font-bold">
          {IconMenu.map((item, index) => (
            <Link
              to={item.link} // Changed `href` to `to` as it's a Link component
              key={index}
              className="text-[#fff] cursor-pointer hover:text-gray-600"
              onClick={() => menuToggle()}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
