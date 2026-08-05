import send from "../assets/send.svg";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Contact1 = () => {
  return (
    <>
      <div className="mt-8 sm:mt-12 md:mt-16">
        <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl">
          Let's Connect
        </h1>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-14 my-4 sm:my-5 p-2">
        <p className="text-slate-400 text-sm sm:text-base">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to
          you!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="relative flex justify-center items-center bg-gray-500/10 rounded-full p-5 sm:p-6 md:p-8 shadow-[0_0_40px_10px_rgba(139,92,246,0.4)]">
          <img src={send} className="w-10 sm:w-12 md:w-16 opacity-90" />
        </div>
      </div>

      <div className="m-4 sm:m-6 md:m-10 bg-slate-100/10 py-2 px-4 sm:px-6 rounded-xl my-8 sm:my-12 md:my-20">
        <a href="mailto:youremail@gmail.com">
          <div className="flex items-center text-left my-2 hover:cursor-pointer">
            <span className="p-1 bg-yellow-400/10 rounded-xl text-blue-700 text-3xl sm:text-4xl md:text-[48px] flex-shrink-0">
              <IoMail />
            </span>
            <div className="mx-2 text-white min-w-0">
              <p className="text-sm sm:text-base">E-mail me at</p>
              <h1 className="text-sm sm:text-base break-words">
                Premrahi234@gmial.com
              </h1>
            </div>
          </div>
        </a>
        <a href="tel:+919643235548">
          <div className="text-left flex items-center my-1 hover:cursor-pointer">
            <span className="p-1 bg-yellow-400/10 rounded-xl text-blue-700 text-3xl sm:text-4xl md:text-[44px] flex-shrink-0">
              <IoCall />
            </span>
            <div className="mx-2 text-white">
              <p className="text-sm sm:text-base">call me at </p>
              <h1 className="text-sm sm:text-base">+91-9643235548</h1>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Contact1;