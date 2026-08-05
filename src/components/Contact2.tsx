import { useState, type ChangeEvent } from "react";

const Contact2 = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const handleClick = (): void => {
    const mailToLink = `mailto:premrahi234@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${email}\n\n${msg}`)}`;

    window.open(mailToLink);
  };

  return (
    <div className="text-center">
      <div className="w-full sm:w-[85%] md:w-[80%] mx-auto px-4 sm:px-0">
        <div className="mx-0 sm:mx-8 md:mx-16 my-8 sm:my-10 md:my-12">
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
            Send me a Message
          </h1>
        </div>
        <div className="-mt-5">
          <p className="text-white text-left text-sm sm:text-md my-2">
            Your email
          </p>
          <input
            type="text"
            placeholder="gulabjaamundotdev@gmail.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="w-full p-3 sm:p-4 bg-gray-500/20 rounded-xl text-white border-2 border-gray-500 text-sm sm:text-base"
          ></input>
        </div>
        <div className="my-6 sm:my-8 md:my-10">
          <p className="text-white text-left text-sm sm:text-md my-2">
            Subject
          </p>
          <input
            type="text"
            placeholder="Let me know how can i help you"
            value={subject}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
            className="w-full p-3 sm:p-4 bg-gray-500/20 rounded-xl text-white border-2 border-gray-500 text-sm sm:text-base"
          ></input>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <p className="text-white text-left text-sm sm:text-md my-2">
            Message
          </p>
          <textarea
            placeholder="Leave a comment... "
            className="w-full h-32 sm:h-36 p-3 sm:p-4 bg-gray-500/20 rounded-xl text-white border-2 border-gray-500 text-sm sm:text-base"
            value={msg}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMsg(e.target.value)
            }
          />
        </div>
        <button
          className="text-white bg-yellow-600 font-bold rounded-xl shadow-md shadow-yellow-900 w-full sm:w-[85%] md:w-[80%] p-3 sm:p-4 my-4"
          onClick={handleClick}
        >
          {" "}
          Send Message{" "}
        </button>
      </div>
    </div>
  );
};

export default Contact2;