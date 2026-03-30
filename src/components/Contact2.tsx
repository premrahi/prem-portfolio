import {useState, type ChangeEvent} from "react";

const Contact2 = () => {
    const [email,setEmail] = useState<string>("")
    const [subject,setSubject] = useState<string>("")
    const [msg,setMsg] = useState<string>("")

    const handleClick = ():void=>{
        const mailToLink = `mailto:premrahi234@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${msg}`)}` ;

        window.open(mailToLink) ;
    }

    return (
    <div className="text-center ">

        <div className=" w-[80%] mx-auto">

      <div className="mx-16 my-12">
        <h1 className="text-white font-bold text-3xl">Send me a Message</h1>
      </div>
      <div className="-mt-5">
        <p className="text-white text-left text-md my-2">Your email</p>
        <input
          type="text"
          placeholder="gulabjaamundotdev@gmail.com"
          value={email} 
          onChange={(e:ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
          className="w-full p-4 bg-gray-500/20 rounded-xl text-white border-2 border-gray-500"
        ></input>
      </div>
      <div className="my-10">
        <p className="text-white text-left  text-md my-2">Subject</p>
        <input
          type="text"
          placeholder="Let me know how can i help you"
          value={subject}
          onChange={(e:ChangeEvent<HTMLInputElement>)=> setSubject(e.target.value)}
          className="w-full p-4 bg-gray-500/20 rounded-xl text-white border-2 border-gray-500"
        ></input>
      </div>
      <div className="mt-10">
        <p className="text-white text-left  text-md my-2">Message</p>
        <textarea
          placeholder="Leave a comment... "
          className="w-full h-36 p-4 bg-gray-500/20 rounded-xl text-white border-2 border-gray-500"
          value={msg}
          onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setMsg(e.target.value)} 
        />
      </div>
      <button className="text-white bg-yellow-600 font-bold rounded-xl shadow-md shadow-yellow-900 w-[80%] p-4 my-2" onClick={handleClick}> Send Message </button>

</div>


    </div>
  );
};

export default Contact2;
