import { useState, useEffect } from "react";
import {
  fetchResumeData,
  fetchPersonalInfo,
  fetchNavLinks,
  fetchSocialLinks,
  fetchExperiences,
  fetchEducation,
  fetchSkillCategories,
  fetchProjects,
} from "../api/resumeApi";
import {
  PersonalInfo,
  NavLink,
  SocialLink,
  Experience,
  Education,
  SkillCategory,
  Project,
} from "../types";

// Define hook return types
interface UseResumeDataReturn {
  personalInfo: PersonalInfo | null;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  experiences: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
  projects: Project[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

// This hook centralizes all data fetching from the API
export const useResumeData = (): UseResumeDataReturn => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Use the consolidated API endpoint for better performance
      const data = await fetchResumeData();

      // Update all state values at once
      setPersonalInfo(data.personalInfo);
      setNavLinks(data.navLinks);
      setSocialLinks(data.socialLinks);
      setExperiences(data.experiences);
      setEducation(data.education);
      setSkillCategories(data.skillCategories);
      setProjects(data.projects);
    } catch (err) {
      console.error("Error fetching resume data:", err);
      setError("Failed to load data. Please try again later.");

      // Try fetching individual pieces as a fallback
      try {
        const [
          personalData,
          navData,
          socialData,
          experienceData,
          educationData,
          skillsData,
          projectsData,
        ] = await Promise.allSettled([
          fetchPersonalInfo(),
          fetchNavLinks(),
          fetchSocialLinks(),
          fetchExperiences(),
          fetchEducation(),
          fetchSkillCategories(),
          fetchProjects(),
        ]);

        if (personalData.status === "fulfilled")
          setPersonalInfo(personalData.value);
        if (navData.status === "fulfilled") setNavLinks(navData.value);
        if (socialData.status === "fulfilled") setSocialLinks(socialData.value);
        if (experienceData.status === "fulfilled")
          setExperiences(experienceData.value);
        if (educationData.status === "fulfilled")
          setEducation(educationData.value);
        if (skillsData.status === "fulfilled")
          setSkillCategories(skillsData.value);
        if (projectsData.status === "fulfilled")
          setProjects(projectsData.value);
      } catch (fallbackErr) {
        console.error("Fallback fetching also failed:", fallbackErr);
      }
    } finally {
      setLoading(false);
    }
  };

  // Load data on initial mount
  useEffect(() => {
    fetchAllData();
  }, []);

  // Return all data and loading state
  return {
    personalInfo,
    navLinks,
    socialLinks,
    experiences,
    education,
    skillCategories,
    projects,
    loading,
    error,
    refreshData: fetchAllData,
  };
};

// Hook for fetching only specific data
interface UseSpecificDataOptions {
  autoFetch?: boolean;
}

export const usePersonalInfo = (
  options: UseSpecificDataOptions = { autoFetch: true }
) => {
  const [data, setData] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(options.autoFetch);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchPersonalInfo();
      setData(result);
      setError(null);
    } catch (err) {
      console.error("Error fetching personal info:", err);
      setError("Failed to load personal information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.autoFetch) {
      fetchData();
    }
  }, [options.autoFetch]);

  return { data, loading, error, refetch: fetchData };
};
