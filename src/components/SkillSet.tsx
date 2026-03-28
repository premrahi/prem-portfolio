import cpp from "../assets/cpp.svg";
import python from "../assets/python.svg";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import sql from "../assets/sql.svg";
import mysql from "../assets/mysql.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";
import tailwind from "../assets/tailwind-svgrepo-com.svg";
import router from "../assets/react-router-svgrepo-com.svg";
import next from "../assets/next-js-svgrepo-com.svg";
import numpy from "../assets/numpy-svgrepo-com.svg";
import { SiPandas } from "react-icons/si";
import git from "../assets/git-svgrepo-com.svg";
import github from "../assets/github-svgrepo-com.svg";
import redux from "../assets/redux-svgrepo-com.svg";
import vite from "../assets/vite-svgrepo-com.svg";
import parcel from "../assets/parcel-icon-svgrepo-com.svg";
import vscode from "../assets/vs-code-svgrepo-com.svg";
import jupyter from "../assets/jupyter-svgrepo-com.svg";
import npm from "../assets/npm-svgrepo-com.svg";
import fedora from "../assets/fedora-svgrepo-com.svg";

const badgeClass = " px-3 text-white py-2 mx-2 my-2 ";

const SkillSet = () => {
  return (
    <>
      <div className="my-40 mx-20 bg-slate-500/10 rounded-2xl">
        <div className="mx-4 p-16">
          <h1 className="text-white text-4xl font-semibold">
            Technical <span className="text-purple-400">Skill</span>
          </h1>

          <hr className="my-8 text-gray-500 "></hr>

          <div className="">
            <div className="my-5">
              <p className="text-white text-xl font-bold my-4">
                Languages & Database
              </p>
              <div className="flex flex-wrap gap-2 text-center">
                <span className={badgeClass}>
                  <img alt="Cpp" src={cpp} className="w-24" /> c++
                </span>
                <span className={badgeClass}>
                  <img alt="python" src={python} className="w-24" /> python
                </span>
                <span className={badgeClass}>
                  <img alt="js" src={js} className="w-24" /> javaScript
                </span>
                <span className={badgeClass}>
                  <img alt="typescript" src={ts} className="w-24" /> typeScript
                </span>
                <span className={badgeClass}>
                  <img alt="sql" src={sql} className="w-24" /> sql
                </span>
                <span className={badgeClass}>
                  <img alt="Mysql" src={mysql} className="w-24" /> MySql
                </span>
                <span className={badgeClass}>
                  <img alt="html" src={html} className="w-24" /> Html
                </span>
                <span className={badgeClass}>
                  <img alt="CSS" src={css} className="w-24" /> css
                </span>
              </div>
            </div>

            <hr className="my-8 text-gray-500 "></hr>

            <div className="my-5 ">
              <p className="text-white text-xl font-bold my-4">
                Frameworks and libraries
              </p>
              <div className="flex text-center flex-wrap gap-2">
                <span className={badgeClass}>
                  <img src={react} alt="react" className="w-24" />
                  React.js
                </span>
                <span className={badgeClass}>
                  <img src={nodejs} alt="Node" className="w-24" />
                  Node.js
                </span>
                <span className={badgeClass}>
                  <img src={tailwind} alt="tailwind" className="w-24" />
                  Tailwind css
                </span>
                <span className={badgeClass}>
                  <img src={router} alt="react router" className="w-24" />
                  React Router
                </span>
                <span className={badgeClass}>
                  <img src={next} alt="next" className="w-24" />
                  Next.js
                </span>
                <span className=" px-3 text-white py-2 mx-2 my-5">
                  <SiPandas size={80} />
                  pandas
                </span>
                <span className={badgeClass}>
                  <img src={numpy} alt="numpy" className="w-24" />
                  Numpy
                </span>
              </div>
            </div>
            <hr className="my-8 text-gray-500 "></hr>

            <div className="my-5">
              <p className="text-white text-xl font-bold my-4">
                Tools & Technologies
              </p>
              <div className="flex text-center flex-wrap gap-2">
                <span className={badgeClass}>
                  <img src={git} alt="git" className="w-24" />
                  Git
                </span>
                <span className={badgeClass}>
                  <img src={github} alt="github" className="w-24" />
                  Github
                </span>
                <span className={badgeClass}>
                  <img src={redux} alt="redux" className="w-24" />
                  redux
                </span>
                <span className={badgeClass}>
                  <img src={npm} alt="npm" className="w-24" />
                  npm
                </span>
                <span className={badgeClass}>
                  <img src={vite} alt="vite" className="w-24" />
                  vite
                </span>
                <span className={badgeClass}>
                  <img src={parcel} alt="parcel" className="w-24" />
                  parcel
                </span>
                <span className={badgeClass}>
                  <img
                    src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
                    alt="firebase"
                    className="w-24"
                  />
                  firebase
                </span>
                <span className={badgeClass}>
                  <img src={vscode} alt="vscode" className="w-24" />
                  vs code
                </span>
                <span className={badgeClass}>
                  <img src={fedora} alt="vscode" className="w-24" />
                  fedora
                </span>

                <span className={badgeClass}>
                  <img src={jupyter} alt="jupyter" className="w-24" />
                  jupyter notebook
                </span>
              </div>
            </div>
          </div>
          <hr className="my-8 text-gray-500 "></hr>
        </div>

        <div className="shimmer text-center text-lg pb-8">
          <p>
            Also solved 350+ coding problems across platforms like LeetCode,
            GeeksforGeeks, and naukari campus.
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillSet;
