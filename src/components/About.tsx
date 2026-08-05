const About = () => {
  return (
    <div className="text-white mt-16 md:mt-24">
      <div className="text-center text-3xl sm:text-4xl md:text-5xl font-light px-4">
        <span className="text-orange-500 px-3 sm:p-6">About</span> me
      </div>

      <hr className="my-8 text-gray-500 mx-6 sm:mx-10 md:mx-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 px-5 md:px-0">
        <div className="md:col-span-6 md:mx-12 lg:mx-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-4">
          <p>
            I'm <span className="text-emerald-400">Prem</span>
          </p>
          <div className="text-base sm:text-lg my-6 md:my-10 text-gray-400">
            <p className="shimmer">
              also known as GULAB JAAMUN. a fullStack developer focused on
              building modern, responsive web applications with clean ui and
              great performance.
            </p>
          </div>
        </div>
        <div className="md:col-span-6 mt-8  md:mt-12 text-base sm:text-lg shimmer">
          <p>A 22 year old fullstack developer based in Delhi, India.</p>
          <p>Dedicated to turn ideas into creative solutions</p>

          <p className="my-4 md:mr-6">
            My approach focuses on creating scalable, high performing solution
            tailored to both user need and user objective. By prioritizing
            performance, accessibility, and responsiveness, I strive to deliver
            experiences that not only engage users but also drive tangible
            results
          </p>
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-28 mt-6 md:mt-0 text-center text-base sm:text-lg text-neutral-500">
        <p>
          With a strong foundation in Data Structures, Algorithms, MERN and B.Tech
          in Electronics and communication from MAIT Delhi, I am dedicated to creating
          impactful tech solutions and driving continuous innovation.
        </p>
      </div>
    </div>
  );
};

export default About;