import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Education as EducationType } from "../../types";
import { fetchEducation } from "../../api/resumeApi";
import { useState, useEffect } from "react";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import EducationCard from "../ui/EducationCard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const Education: FC = () => {
  const [education, setEducation] = useState<EducationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEducation = async () => {
      try {
        const data = await fetchEducation();
        setEducation(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching education:", err);
        setError("Failed to load education information");
        setLoading(false);
      }
    };

    loadEducation();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  if (loading) {
    return (
      <SectionContainer id="education">
        <SectionTitle
          title="Education"
          subtitle="My academic background and achievements"
          icon={AcademicCapIcon}
        />
        <div className="text-center text-gray-600 dark:text-gray-400">
          Loading education information...
        </div>
      </SectionContainer>
    );
  }

  if (error) {
    return (
      <SectionContainer id="education">
        <SectionTitle
          title="Education"
          subtitle="My academic background and achievements"
          icon={AcademicCapIcon}
        />
        <div className="text-center text-red-600 dark:text-red-400">
          {error}
        </div>
      </SectionContainer>
    );
  }

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
