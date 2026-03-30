import Contact1 from "./Contact1";
import Contact2 from "./Contact2";

const Contact = () => {
  return (
    <div className="my-24 p-6  mx-20 rounded-xl grid grid-cols-12 ">
      <div className="col-span-5 bg-blue-900/30 mx-2 rounded-xl text-center">
        <Contact1 />
      </div>
      <div className="col-span-7 bg-blue-900/40 mx-2 rounded-xl">
        <Contact2 />
      </div>
    </div>
  );
};

export default Contact;
