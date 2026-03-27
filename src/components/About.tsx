
const About = () => {
  return (
    <div className="text-white mt-15">
      <div className="text-center text-5xl font-light">
        <span className="text-orange-500 p-6">About</span> me
      </div>

      <hr className="my-8 text-gray-500 mx-16"></hr>

      <div className="grid grid-cols-12">
        <div className="col-span-6 mx-24 text-6xl p-4">
          <p>
            I'm <span className="text-emerald-400">Prem</span>
          </p>
          <div className="text-lg my-10 text-gray-400">
            <p className="shimmer">
              also known as GULAB JAAMUN. a frontend developer focused on
              building modern, responsive web applications with clean ui and
              great performance.
            </p>
          </div>
        </div>
        <div className="col-span-6 mt-12 text-lg shimmer ">
          <p>A 22 year old frontend developer based in Delhi, India.</p>
          <p>Dedicated to turn ideas into creative solutions</p>

          <p className="my-4 mr-4">
            My approach focuses on creating scalable, high performing solution
            tailored to both user need and user objective. By prioritizing
            performance, accessibility, and responsiveness, I strive to deliver
            experiences that not only engage users but also drive tangible
            results
          </p>
        </div>
      </div>
      <div className="mx-26 text-lg text-neutral-500">
        <p>
          With a strong foundation in Data Structures, Algorithms, and a B.Tech
          in Electronics and communication from MAIT Delhi, I am dedicated to creating
          impactful tech solutions and driving continuous innovation.
        </p>
      </div>
    </div>
  );
};

export default About;
