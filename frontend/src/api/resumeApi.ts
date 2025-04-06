import {
  Experience,
  Education,
  Project,
  SocialLink,
  NavLink,
  PersonalInfo,
  SkillCategory,
} from "../types";

import { defaultData } from "./mockData";

// Mock implementation of the Resume API
console.log("Resume API service initialized with mock data");

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
 * Get data from mock data source
 */
const getMockData = <T>(endpoint: string): T => {
  console.log(`Fetching mock data for ${endpoint}`);

  // Use the default data (Vadim's data)
  const userData = defaultData;

  // Return the specific data section or the whole object for "all"
  if (endpoint === "all") {
    return userData as unknown as T;
  }

  // Return the specific section of the data
  return userData[endpoint as keyof typeof userData] as unknown as T;
};

// Function to fetch all resume data at once
export const fetchResumeData = async (): Promise<ResumeData> => {
  return getMockData<ResumeData>("all");
};

// Individual fetch functions for specific data
export const fetchPersonalInfo = async (): Promise<PersonalInfo> => {
  return getMockData<PersonalInfo>("personalInfo");
};

export const fetchNavLinks = async (): Promise<NavLink[]> => {
  return getMockData<NavLink[]>("navLinks");
};

export const fetchSocialLinks = async (): Promise<SocialLink[]> => {
  return getMockData<SocialLink[]>("socialLinks");
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  return getMockData<Experience[]>("experiences");
};

export const fetchEducation = async (): Promise<Education[]> => {
  return getMockData<Education[]>("education");
};

export const fetchSkillCategories = async (): Promise<SkillCategory[]> => {
  return getMockData<SkillCategory[]>("skillCategories");
};

export const fetchProjects = async (): Promise<Project[]> => {
  return getMockData<Project[]>("projects");
};
