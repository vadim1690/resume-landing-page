import { FC } from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import SkillCategory from "../ui/SkillCategory";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { SkillCategory as SkillCategoryType } from "../../types";
import { fetchSkillCategories } from "../../api/resumeApi";
import { useState, useEffect } from "react";

const Skills: FC = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategoryType[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchSkillCategories();
        setSkillCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading skills:", error);
        setError("Failed to load skills");
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  if (loading) {
    return (
      <SectionContainer id="skills">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="My technical expertise and proficiencies"
          icon={ChartBarIcon}
        />
        <div className="text-center text-gray-600 dark:text-gray-400">
          Loading skills...
        </div>
      </SectionContainer>
    );
  }

  if (error) {
    return (
      <SectionContainer id="skills">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="My technical expertise and proficiencies"
          icon={ChartBarIcon}
        />
        <div className="text-center text-red-600 dark:text-red-400">
          {error}
        </div>
      </SectionContainer>
    );
  }

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
