import prem from "../assets/prem.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen text-white flex flex-col md:flex-row items-center gap-10 md:gap-0 md:-my-10"
    >
      <div className="w-full md:w-3/5 md:ml-6 lg:ml-10 px-6 sm:px-10 lg:px-16 cursor-default select-none my-10 text-center md:text-left">
        <span className="text-orange-600 text-4xl sm:text-6xl lg:text-8xl font-semibold">
          Full Stack
        </span>
        <p className="text-slate-300 text-4xl sm:text-6xl lg:text-8xl font-semibold sm:ml-8">
          DEVELOP<span className="text-slate-500">ER</span>
        </p>
        <div className="my-6 text-lg text-slate-300 w-full md:w-4/5 mx-auto md:mx-0">
          <p className="shimmer">
            Hi! I'm Prem also known as GULAB JAAMUN. A FullStack Developer with
            hands-on experience through building high-performance, scalable, and
            responsive web solutions.
          </p>
        </div>
        <a href="/prem_resume.pdf" download="prem_resume.pdf">
          <button className="bg-orange-500/60 px-2 py-1 rounded-lg text-black hover:text-white hover:bg-gray-700 hover:text-2xl">
            get Resume
          </button>
        </a>
      </div>

      <div className="w-full md:w-2/5 flex flex-col items-center gap-6 px-6 md:px-0">
        <div className="animated-border p-1">
          <div
            className="overflow-hidden w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#0d1117]"
            style={{ borderRadius: "inherit" }}
          >
            <img src={prem} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="text-orange-500 text-sm w-full md:w-3/4">
          {"<span>"}
          <p className="text-slate-400 px-4 py-1 font-mono">
            Proficient in latest web technologies and frameworks, continuously
            expanding my skill set to stay at the forefront of the industry.
          </p>
          {"</span>"}
        </div>
      </div>
    </div>
  );
};

export default Home;