import { FC } from "react";
import { Experience as ExperienceType } from "../../types";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../ui/ExperienceCard";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { useResumeData } from "../../hooks/useResumeData";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Experience: FC = () => {
  // Use the centralized hook for data fetching
  const { experiences, loading, error } = useResumeData();

  if (loading) {
    return (
      <SectionContainer id="experience">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and achievements"
          icon={BriefcaseIcon}
        />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      </SectionContainer>
    );
  }

  if (error || !experiences.length) {
    return (
      <SectionContainer id="experience">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and achievements"
          icon={BriefcaseIcon}
        />
        <div className="text-center text-gray-600 dark:text-gray-400">
          {error || "No experience data available"}
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="experience">
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey and achievements"
        icon={BriefcaseIcon}
      />

      <motion.div
        className="space-y-8 mt-8"
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default Experience;
