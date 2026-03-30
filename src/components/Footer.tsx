import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

const footer = () => {
  return (
    <div className="w-full mt-10 bg-gray-700 flex text-gray-500 justify-between px-24 py-4">
      <div className="">© 2026 Gulab Jaamun. All Rights Reserved.</div>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/premrahi_16/?hl=en" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram
            size={24}
            className="cursor-pointer hover:text-pink-500"
          />
        </a>
        <a href="https://github.com/premrahi" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="cursor-pointer hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/prem-rahi-237318253/" target="_blank" rel="noopener noreferrer">
          <CiLinkedin
            size={24}
            className="cursor-pointer hover:text-blue-500"
          />
        </a>
        <a href="https://leetcode.com/u/premrahi/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode
            size={24}
            className="cursor-pointer hover:text-yellow-500"
          />
        </a>
      </div>
    </div>
  );
};

export default footer;
