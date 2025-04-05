import {
  Experience,
  Education,
  Project,
  SocialLink,
  NavLink,
  PersonalInfo,
  SkillCategory,
} from "../types";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5112/api/Resume";

// Add explicit console log when initializing
console.log("Resume API service initialized with base URL:", API_BASE_URL);

interface ResumeData {
  personalInfo: PersonalInfo;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  experiences: Experience[];
  education: Education[];
  skillCategories: SkillCategory[];
  projects: Project[];
}

/**
 * Generic API request function to reduce code duplication
 */
const apiRequest = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

// Function to fetch all resume data at once
export const fetchResumeData = async (): Promise<ResumeData> => {
  return apiRequest<ResumeData>("all");
};

// Individual fetch functions for specific data
export const fetchPersonalInfo = async (): Promise<PersonalInfo> => {
  return apiRequest<PersonalInfo>("personalInfo");
};

export const fetchNavLinks = async (): Promise<NavLink[]> => {
  return apiRequest<NavLink[]>("navLinks");
};

export const fetchSocialLinks = async (): Promise<SocialLink[]> => {
  return apiRequest<SocialLink[]>("socialLinks");
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  return apiRequest<Experience[]>("experiences");
};

export const fetchEducation = async (): Promise<Education[]> => {
  return apiRequest<Education[]>("education");
};

export const fetchSkillCategories = async (): Promise<SkillCategory[]> => {
  return apiRequest<SkillCategory[]>("skillCategories");
};

export const fetchProjects = async (): Promise<Project[]> => {
  return apiRequest<Project[]>("projects");
};
