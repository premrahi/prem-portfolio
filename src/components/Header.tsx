import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState<string>("home");


  const baseClass =
    "font-semibold text-sm sm:text-base p-2 px-3 sm:p-3 sm:px-5 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 block border border-transparent";
  
  const activeClass = "bg-orange-500/20 text-white border-orange-400/50";
  const inactiveClass = "bg-gray-400/10 text-gray-300 hover:text-gray-200";

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];
  
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto flex justify-center">
      <nav className="w-full sm:w-auto px-3 py-2 bg-gray-500/10 border border-orange-800/20 backdrop-blur-xl rounded-full shadow-md shadow-orange-900/40">
        <ul className="flex items-center justify-between sm:justify-center gap-1 sm:gap-4 md:gap-8 text-center">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`${baseClass} ${
                  active === link.id ? activeClass : inactiveClass
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;