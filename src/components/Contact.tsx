import Contact1 from "./Contact1";
import Contact2 from "./Contact2";

const Contact = () => {
  return (
    <div className="my-12 sm:my-16 md:my-24 p-4 sm:p-6 mx-4 sm:mx-10 md:mx-20 rounded-xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0">
      <div className="md:col-span-5 bg-blue-900/30 mx-0 sm:mx-2 rounded-xl text-center">
        <Contact1 />
      </div>
      <div className="md:col-span-7 bg-blue-900/40 mx-0 sm:mx-2 rounded-xl">
        <Contact2 />
      </div>
    </div>
  );
};

export default Contact;