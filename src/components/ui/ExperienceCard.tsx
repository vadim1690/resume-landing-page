import { FC } from "react";
import { motion } from "framer-motion";
import { Experience } from "../../types";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

interface ExperienceCardProps {
  experience: Experience;
  // isEven prop is no longer needed
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className="relative" variants={cardVariants}>
      {/* Desktop timeline marker - positioned absolutely relative to parent timeline */}
      <div
        className="hidden md:flex md:items-center md:justify-center absolute top-5 w-7 h-7 rounded-full bg-primary-500 shadow-md -ml-2.5 z-20"
        style={{ left: "-3.25rem" }} // Aligns with the parent timeline line
      >
        <BriefcaseIcon className="w-3.5 h-3.5 text-white" />
      </div>

      {/* Card content */}
      <motion.div
        variants={childVariants}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-5 
                   border-t-4 border-primary-500 dark:border-primary-400 transition-all 
                   duration-300 transform hover:-translate-y-1 relative z-10 mb-8"
      >
        {/* Mobile timeline marker - only visible on mobile */}
        <div className="absolute -left-3 top-5 md:hidden">
          <div className="w-6 h-6 rounded-full bg-primary-500 shadow-md flex items-center justify-center">
            <BriefcaseIcon className="w-3 h-3 text-white" />
          </div>
        </div>

        <div className="flex flex-col pl-5 md:pl-0">
          {" "}
          {/* Add padding-left for mobile view only */}
          <div className="flex justify-between items-center flex-wrap mb-2">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mr-3">
              {experience.role}
            </h3>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 mt-1 md:mt-0">
              {experience.period}
            </span>
          </div>
          <p className="text-primary-600 dark:text-primary-400 text-sm mb-4 font-semibold">
            {experience.company}
          </p>
          <div className="mb-4">
            {experience.description &&
              experience.description.map((desc, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <div className="flex">
                    <div className="flex-shrink-0 pt-1">
                      <span className="flex h-2 w-2 rounded-full bg-primary-500 mt-1.5 mr-3"></span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies &&
              experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
                  style={{ transitionDelay: `${idx * 20}ms` }}
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
