import { FC, useEffect } from "react";
import { Experience as ExperienceType } from "../../types";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../ui/ExperienceCard";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { useResumeData } from "../../hooks/useResumeData";

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
        <div className="text-center text-gray-600 dark:text-gray-400 p-6">
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        </div>
      </SectionContainer>
    );
  }

  if (error || !experiences || experiences.length === 0) {
    return (
      <SectionContainer id="experience">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and achievements"
          icon={BriefcaseIcon}
        />
        <div className="text-center text-red-600 dark:text-red-400 p-6">
          <p className="font-bold mb-2">
            {error || "No experience data available"}
          </p>
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

      <div className="space-y-8 mt-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;
