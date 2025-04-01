import { FC } from "react";
import { skillCategories } from "../../data/resume";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import SkillCategory from "../ui/SkillCategory";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Skills: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <SectionContainer id="skills">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="My technical expertise and proficiencies"
        icon={ChartBarIcon}
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
            index={index}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Skills;
