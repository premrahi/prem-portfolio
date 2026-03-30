import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

const footer = () => {
  return (
    <div className="w-full mt-10 bg-gray-700 flex text-gray-500 justify-between px-24 py-4">
      <div className="">© 2026 Gulab Jaamun. All Rights Reserved.</div>
      <div className="flex ">
        <IoLogoInstagram size={24}/>
        <FaGithub size={24}/>
        <CiLinkedin size={24}/>
        <SiLeetcode size={24}/>
      </div>
    </div>
  );
};

export default footer;
