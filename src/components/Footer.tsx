import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full mt-12 lg:mt-24 bg-gray-700 text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-12 lg:px-24 py-4 transition-all">
      <div className="text-center sm:text-left text-sm sm:text-base">
        © 2026 Gulab Jaamun. All Rights Reserved.
      </div>
      
      <div className="flex items-center gap-4 sm:gap-3">
        <a 
          href="https://www.instagram.com/premrahi_16/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <IoLogoInstagram
            size={24}
            className="cursor-pointer transition-colors duration-200 hover:text-pink-500"
          />
        </a>
        <a 
          href="https://github.com/premrahi" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub 
            size={24} 
            className="cursor-pointer transition-colors duration-200 hover:text-white" 
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/prem-rahi-237318253/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <CiLinkedin
            size={24}
            className="cursor-pointer transition-colors duration-200 hover:text-blue-400"
          />
        </a>
        <a 
          href="https://leetcode.com/u/premrahi/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <SiLeetcode
            size={24}
            className="cursor-pointer transition-colors duration-200 hover:text-amber-500"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;