import { FC, useState, useEffect } from "react";
import { Experience as ExperienceType } from "../../types";
import SectionContainer from "../ui/SectionContainer";
import SectionTitle from "../ui/SectionTitle";
import ExperienceCard from "../ui/ExperienceCard";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { fetchExperiences } from "../../api/resumeApi";

const Experience: FC = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch experiences from API
  useEffect(() => {
    const getExperiences = async () => {
      setLoading(true);
      try {
        const data = await fetchExperiences();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    getExperiences();
  }, []);

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

  return (
    <SectionContainer id="experience">
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey and achievements"
        icon={BriefcaseIcon}
      />

      {/* Container for the timeline layout */}
      <div className="relative md:pl-12">
        {" "}
        {/* Add padding for timeline space */}
        {/* Vertical timeline line - visible only on desktop */}
        <div className="hidden md:block absolute left-0 top-5 bottom-0 w-1.5 bg-primary-100 dark:bg-primary-900/20 rounded-full"></div>
        {/* Map through experiences */}
        <div className="space-y-8 md:space-y-0 ">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${index}`}
              experience={experience}
              // No isEven prop needed anymore
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
