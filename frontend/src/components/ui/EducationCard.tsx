import { FC } from "react";
import { motion } from "framer-motion";
import { Education } from "../../types";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

interface EducationCardProps {
  education: Education;
}

const EducationCard: FC<EducationCardProps> = ({ education }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
      variants={cardVariants}
    >
      <div className="bg-secondary-500 dark:bg-secondary-600 h-2 w-full"></div>
      <div className="p-6 relative bg-white dark:bg-gray-800">
        <div className="flex items-center mb-5 relative z-10">
          <div className="rounded-full bg-secondary-500 p-3 mr-4 shadow-md flex-shrink-0">
            <AcademicCapIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
              {education.degree} in {education.field}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 font-medium">
              {education.school}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
          <div className="flex items-center">
            <span className="text-gray-500 dark:text-gray-400 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              {education.period}
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 dark:text-gray-400 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {education.location}
            </p>
          </div>
        </div>

        {education.gpa && (
          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-gray-500 dark:text-gray-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="text-secondary-600 dark:text-secondary-400 text-sm font-semibold">
                {education.gpa}
              </p>
            </div>
          </div>
        )}

        {education.achievements && education.achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
              <span className="w-4 h-0.5 bg-secondary-500 mr-2"></span>
              Achievements & Activities
            </h4>
            <ul className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-300 pl-4 border-l-2 border-gray-200 dark:border-gray-700 hover:border-secondary-500 dark:hover:border-secondary-400 transition-colors duration-200"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
