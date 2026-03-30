import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState<string>("home");

  const baseClass = "mx-6 font-semibold text-lg p-3 px-4 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300";
  const activeClass = "bg-orange-500/20 text-white border border-orange-400/50";
  const inactiveClass = "bg-gray-400/10 text-gray-300 hover:text-gray-200";

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="mt-5 px-2 py-3 w-[50%] flex justify-center text-white text-center fixed bg-gray-500/10 top-0 z-50 border rounded-full border-orange-400/20 left-1/2 -translate-x-1/2 backdrop-blur-xl shadow-md shadow-orange-900/50">
      <ul className="flex text-center gap-8">
        {links.map((link) => (
          <a href={`#${link.id}`} key={link.id} onClick={() => setActive(link.id)}>
            <li className={`${baseClass} ${active === link.id ? activeClass : inactiveClass}`}>
              {link.label}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Header;