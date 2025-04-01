import { FC, SyntheticEvent } from "react";
import { motion } from "framer-motion";
import { Project } from "../../types";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Define category color mappings
const categoryColors: Record<string, string> = {
  web: "bg-blue-500",
  backend: "bg-emerald-500",
  fullstack: "bg-purple-500",
  mobile: "bg-orange-500",
  other: "bg-gray-500",
};

const FALLBACK_IMAGE_SRC = "/images/project_fallback.jpg";

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
      },
    },
  };

  const categoryColor =
    categoryColors[project.category] || categoryColors.other;

  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE_SRC;
    e.currentTarget.classList.add("fallback-image-style");
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-black/30 opacity-70 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm z-10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-full p-3 mx-2 hover:bg-primary-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="View code on GitHub"
            >
              <CodeBracketIcon className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-full p-3 mx-2 hover:bg-primary-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="View live demo"
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          )}
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`px-3 py-1 text-xs font-medium text-white rounded-full ${categoryColor} shadow-md`}
          >
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 p-4 z-10">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        </div>
      </div>

      <div className="p-5 flex-grow bg-white dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
