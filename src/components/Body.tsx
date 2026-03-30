import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import SkillSet from "./SkillSet";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="pt-20">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <SkillSet />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Body;