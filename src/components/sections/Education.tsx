import { FC } from "react";
import { education } from "../../data/resume";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import EducationCard from "../ui/EducationCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Education: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <SectionContainer id="education">
      <SectionTitle
        title="Education"
        subtitle="My academic background and achievements"
        icon={AcademicCapIcon}
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {education.map((edu, index) => (
          <EducationCard key={`${edu.school}-${index}`} education={edu} />
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Education;
