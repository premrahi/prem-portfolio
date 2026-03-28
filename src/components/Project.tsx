import projects from "../constants/projects.json";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="my-24 bg-slate-500/10  mx-20 justify-center p-10 rounded-2xl">
      <span className="text-4xl font-semibold px-10 text-white">
        Project<span className="text-red-700">s</span>
      </span>
      <hr className="my-8 text-gray-500 mx-8"></hr>
      <div className="space-y-5">
        {projects.projects.map((project) => (
          <ProjectCard key={project.title} project={project } />
        ))}
      </div>
    </div>
  );
};

export default Project;
