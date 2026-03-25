import prem from "../assets/prem.png";


const Home = () => {
   return (
    <div id="home" className="min-h-screen text-white flex items-center -my-10">
      <div className="w-3/5 ml-10 px-16 cursor-default select-none my-10">
        <span className="text-orange-600 text-8xl font-semibold">FRONTEND</span>
        <p className="text-slate-300 text-8xl font-semibold ml-8">
          DEVELOP<span className="text-slate-500">ER</span>
        </p>
        <div className="my-6 text-lg text-slate-300 w-4/5">
          <p className="shimmer">
            Hi! I'm Prem also known as GULAB JAAMUN. A Frontend Developer with
            hands-on experience through building high-performance, scalable, and
            responsive web solutions.
          </p>
        </div>
      </div>

      <div className="w-2/5 flex flex-col items-center gap-6">
        <div className="animated-border p-1">
          <div
            className="overflow-hidden w-80 h-80 bg-[#0d1117]"
            style={{ borderRadius: "inherit" }}
          >
            <img src={prem} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="text-orange-500 text-sm  w-3/4">
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
}

export default Home