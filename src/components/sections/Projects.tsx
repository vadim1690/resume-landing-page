import { FC, useState, useEffect } from "react";
import { projects } from "../../data/resume";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCategory =
  | "all"
  | "web"
  | "backend"
  | "fullstack"
  | "mobile"
  | "other";

const Projects: FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Update filtered projects when filter changes
  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === filter)
      );
    }
  }, [filter]);

  // Get unique categories from projects
  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories: ProjectCategory[] = [
    "all",
    ...(uniqueCategories as ProjectCategory[]),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <SectionContainer id="projects">
      <SectionTitle
        title="Projects"
        subtitle="Some of my recent work and side projects"
        icon={CodeBracketIcon}
      />

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? "bg-primary-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
            />
          ))}

          {filteredProjects.length === 0 && (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-500 dark:text-gray-400">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </SectionContainer>
  );
};

export default Projects;
