import { FC } from "react";
import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCategory: FC<SkillCategoryProps> = ({ title, skills, index }) => {
  // Array of color classes for skill tags
  const colorClasses = [
    "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  ];

  // Get a color class based on the skill's index, cycling through the available colors
  const getColorClass = (skillIndex: number) => {
    return colorClasses[skillIndex % colorClasses.length];
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border-t-4 border-primary-500 dark:border-primary-400 hover:shadow-lg transition-shadow duration-300"
      variants={categoryVariants}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 rounded-full"></span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClass(
              skillIndex
            )} transition-all duration-300`}
            variants={skillVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
