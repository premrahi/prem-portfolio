import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {


  const listCssClass =
    "m-6 font-semibold text-lg cursor-pointer hover:scale-105 transition-transform duration-300 hover:text-gray-200";
  return (
    <div
      className="p-4 flex text-white items-center justify-between"
      style={{
        backgroundColor: "#0d1117",
      }}
    >
      <span className="my-6 mx-12 font-mono text-2xl">PORTFOLIO</span>
      <ul className="flex items-center gap-6">
        <li className={listCssClass}>Home</li>
        <li className={listCssClass}>About</li>
        <li className={listCssClass}>Portfolio</li>
        <li className={listCssClass}>Contact</li>
        <li className={listCssClass}>
          <span className="hover:text-yellow-400 ">
            <MdOutlineDarkMode className="text-2xl" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
