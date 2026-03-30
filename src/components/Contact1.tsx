import send from "../assets/send.svg";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
const Contact1 = () => {
  return (
    <>
     <div className="mt-16">
          <h1 className="font-bold text-white text-4xl">Let's Connect</h1>
        </div>
        <div className="mx-14 my-5 p-2">
          <p className="text-slate-400">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative flex justify-center items-center bg-gray-500/10 rounded-full p-8 shadow-[0_0_40px_10px_rgba(139,92,246,0.4)]">
            <img src={send} className="w-16 opacity-90" />
          </div>
        </div>

        <div className="m-10 bg-slate-100/10 py-2 px-6 rounded-xl my-20 ">
          <a href="mailto:youremail@gmail.com">
            <div className=" flex text-left my-2 hover:cursor-pointer">
              <span className="p-1 bg-yellow-400/10 rounded-xl text-blue-700">
                <IoMail size={48} />
              </span>
              <div className="mx-2 text-white ">
                <p>E-mail me at</p>
                <h1>Premrahi234@gmial.com</h1>
              </div>
            </div>
          </a>
          <a href="tel:+919643235548">
            <div className="text-left flex my-1 hover:cursor-pointer">
              <span className="p-1 bg-yellow-400/10 rounded-xl text-blue-700">
                <IoCall size={44} />
              </span>
              <div className="mx-2 text-white">
                <p>call me at </p>
                <h1> +91-9643235548</h1>
              </div>
            </div>
          </a>
        </div></>
  )
}

export default Contact1