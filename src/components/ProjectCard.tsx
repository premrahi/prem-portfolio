import { FaCheck, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";
import picoLinkImage from "../assets/picoLink.png";
import gulabjaamunImage from "../assets/gulabjaamunfoods.png";
import netflixImage from "../assets/netflixgpt.png";

interface Highlight {
  id: string;
  title: string;
  description: string;
}

interface Links {
  github: string;
  live: string;
}

interface Image {
  path: string;
}

interface Project {
  title: string;
  tags: string[];
  category: string;
  highlights: Highlight[];
  techStack: string[];
  links: Links;
  image: Image;
}

const imageMap: Record<string, string> = {
  gulabjaamunImage: gulabjaamunImage,
  netflixImage: netflixImage,
  picoLinkImage: picoLinkImage,
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, highlights, techStack, tags, links, image } = project;
  const resolvedImage = imageMap[image.path];
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <>
      {/* Backdrop — only when hovering the image */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 pointer-events-none ${
          imageHovered ? "opacity-100 scale-125" : "opacity-0"
        }`}
      />

      {/* Fullscreen popup — only when hovering the image */}
      {resolvedImage && (
        <div
          className={`fixed inset-0 z-[70] flex items-center justify-center pointer-events-none transition-all duration-300 ${
            imageHovered ? "opacity-100 scale-150" : "opacity-0 scale-90"
          }`}
        >
          <div className="w-[650px] max-w-[90vw] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img
              src={resolvedImage}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* Card */}
      <div className="relative flex flex-col md:flex-row items-stretch gap-5 sm:gap-6 md:gap-8 hover:bg-orange-800/30 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-orange-500/40 transition-all duration-300 bg-gray-800/30">
        {/* Purple left accent bar */}
        <div className="absolute left-0 top-5 bottom-5 sm:top-6 sm:bottom-6 md:top-8 md:bottom-8 w-[3px] bg-orange-600 rounded-full" />

        <div className="flex-1 pl-3 md:pl-4 flex flex-col">
          {/* Mobile/tablet static thumbnail — desktop hover-image handles this instead */}
          {resolvedImage && (
            <div className="md:hidden w-full h-44 sm:h-56 rounded-xl overflow-hidden border border-white/10 shadow-xl mb-4">
              <img
                src={resolvedImage}
                alt={title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          <div className="mb-4 sm:mb-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag: string) => (
                <p
                  key={tag}
                  className="text-orange-400 text-xs sm:text-sm mx-1 sm:mx-2 font-medium tracking-wide"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 flex-1">
            {highlights.slice(0, 3).map((h) => (
              <li key={h.id} className="flex items-start gap-3">
                <FaCheck className="text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-white font-semibold">{h.title} — </span>
                  {h.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-gray-300 hover:border-orange-500/60 hover:text-orange-300 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
            {links.github && (
              
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-105"
              >
                <FaGithub />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Static image on right — hover triggers popup (desktop/tablet-row only) */}
        {resolvedImage && (
          <div className="hidden md:flex items-center flex-shrink-0">
            <div
              className="w-80 h-52 rounded-xl overflow-hidden border border-white/10 shadow-xl cursor-zoom-in transition-all duration-300 hover:border-orange-500/50 hover:scale-105"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <img
                src={resolvedImage}
                alt={title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;