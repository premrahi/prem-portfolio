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
import mongo from "../assets/mongo-svgrepo-com.svg";
import expressjs from "../assets/express-svgrepo-com.svg";

const badgeClass = "px-2 sm:px-3 text-white py-1 sm:py-2 mx-1 sm:mx-2 my-1 sm:my-2";
const iconClass = "w-14 sm:w-16 md:w-20 lg:w-24";

const SkillSet = () => {
  return (
    <>
      <div className="my-16 sm:my-24 lg:my-40 mx-4 sm:mx-8 md:mx-12 lg:mx-20 bg-slate-500/10 rounded-2xl">
        <div className="mx-2 sm:mx-4 p-6 sm:p-10 md:p-12 lg:p-16">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Technical <span className="text-purple-400">Skill</span>
          </h1>

          <hr className="my-8 text-gray-500"></hr>

          <div className="">
            <div className="my-5">
              <p className="text-white text-lg sm:text-xl font-bold my-4">
                Languages & Database
              </p>
              <div className="flex flex-wrap gap-2 text-center">
                <span className={badgeClass}>
                  <img alt="Cpp" src={cpp} className={iconClass} /> c++
                </span>
                <span className={badgeClass}>
                  <img alt="python" src={python} className={iconClass} /> python
                </span>
                <span className={badgeClass}>
                  <img alt="js" src={js} className={iconClass} /> javaScript
                </span>
                <span className={badgeClass}>
                  <img alt="typescript" src={ts} className={iconClass} /> typeScript
                </span>
                <span className={badgeClass}>
                  <img alt="sql" src={sql} className={iconClass} /> sql
                </span>
                <span className={badgeClass}>
                  <img alt="Mysql" src={mysql} className={iconClass} /> MySql
                </span>
                <span className={badgeClass}>
                  <img alt="html" src={html} className={iconClass} /> Html
                </span>
                <span className={badgeClass}>
                  <img alt="CSS" src={css} className={iconClass} /> css
                </span>
                <span className={badgeClass}>
                  <img alt="CSS" src={mongo} className={iconClass} /> Mongo DB
                </span>
              </div>
            </div>

            <hr className="my-8 text-gray-500"></hr>

            <div className="my-5 ">
              <p className="text-white text-lg sm:text-xl font-bold my-4">
                Frameworks and libraries
              </p>
              <div className="flex text-center flex-wrap gap-2">
                <span className={badgeClass}>
                  <img src={expressjs} alt="react" className={iconClass} />
                  Express.js
                </span>
                <span className={badgeClass}>
                  <img src={react} alt="react" className={`mt-3 ${iconClass}`} />
                  React.js
                </span>
                <span className={badgeClass}>
                  <img src={nodejs} alt="Node" className={iconClass} />
                  Node.js
                </span>
                <span className={badgeClass}>
                  <img src={tailwind} alt="tailwind" className={iconClass} />
                  Tailwind css
                </span>
                <span className={badgeClass}>
                  <img src={router} alt="react router" className={iconClass} />
                  React Router
                </span>
                <span className={badgeClass}>
                  <img src={next} alt="next" className={iconClass} />
                  Next.js
                </span>
                <span className="px-2 sm:px-3 text-white py-2 mx-1 sm:mx-2 my-3 sm:my-5">
                  <SiPandas className="text-[44px] sm:text-[52px] md:text-[68px] lg:text-[80px]" />
                  pandas
                </span>
                <span className={badgeClass}>
                  <img src={numpy} alt="numpy" className={iconClass} />
                  Numpy
                </span>
              </div>
            </div>
            <hr className="my-8 text-gray-500"></hr>

            <div className="my-5">
              <p className="text-white text-lg sm:text-xl font-bold my-4">
                Tools & Technologies
              </p>
              <div className="flex text-center flex-wrap gap-2">
                <span className={badgeClass}>
                  <img src={git} alt="git" className={iconClass} />
                  Git
                </span>
                <span className={badgeClass}>
                  <img src={github} alt="github" className={iconClass} />
                  Github
                </span>
                <span className={badgeClass}>
                  <img src={redux} alt="redux" className={iconClass} />
                  redux Toolkit
                </span>
                <span className={badgeClass}>
                  <img src={npm} alt="npm" className={iconClass} />
                  npm
                </span>
                <span className={badgeClass}>
                  <img src={vite} alt="vite" className={iconClass} />
                  vite
                </span>
                <span className={badgeClass}>
                  <img src={parcel} alt="parcel" className={iconClass} />
                  parcel
                </span>
                <span className={badgeClass}>
                  <img
                    src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
                    alt="firebase"
                    className={iconClass}
                  />
                  firebase
                </span>
                <span className={badgeClass}>
                  <img src={vscode} alt="vscode" className={iconClass} />
                  vs code
                </span>
                <span className={badgeClass}>
                  <img src={fedora} alt="vscode" className={iconClass} />
                  fedora
                </span>

                <span className={badgeClass}>
                  <img src={jupyter} alt="jupyter" className={iconClass} />
                  jupyter notebook
                </span>
              </div>
            </div>
          </div>
          <hr className="my-8 text-gray-500"></hr>
        </div>

        <div className="shimmer text-center text-base sm:text-lg px-4 sm:px-6 pb-6 sm:pb-8">
          <p>
            Also solved 250+ coding problems across platforms like LeetCode,
            GeeksforGeeks and naukari campus.
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillSet;