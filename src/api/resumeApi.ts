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

// Function to fetch all resume data at once
export const fetchResumeData = async (): Promise<ResumeData> => {
  console.log("Attempting to fetch all resume data from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/all`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched resume data from API");
    return data;
  } catch (error) {
    console.error("Error fetching resume data from API:", error);
    throw error;
  }
};

// Individual fetch functions for specific data
export const fetchPersonalInfo = async (): Promise<PersonalInfo> => {
  console.log("Attempting to fetch personal info from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/personalInfo`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched personal info from API");
    return data;
  } catch (error) {
    console.error("Error fetching personal info from API:", error);
    throw error;
  }
};

export const fetchNavLinks = async (): Promise<NavLink[]> => {
  console.log("Attempting to fetch nav links from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/navLinks`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched nav links from API");
    return data;
  } catch (error) {
    console.error("Error fetching nav links from API:", error);
    throw error;
  }
};

export const fetchSocialLinks = async (): Promise<SocialLink[]> => {
  console.log("Attempting to fetch social links from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/socialLinks`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched social links from API");
    return data;
  } catch (error) {
    console.error("Error fetching social links from API:", error);
    throw error;
  }
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  console.log("Attempting to fetch experiences from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/experiences`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched experiences from API");
    return data;
  } catch (error) {
    console.error("Error fetching experiences from API:", error);
    throw error;
  }
};

export const fetchEducation = async (): Promise<Education[]> => {
  console.log("Attempting to fetch education from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/education`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched education from API");
    return data;
  } catch (error) {
    console.error("Error fetching education from API:", error);
    throw error;
  }
};

export const fetchSkillCategories = async (): Promise<SkillCategory[]> => {
  console.log("Attempting to fetch skill categories from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/skillCategories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched skill categories from API");
    return data;
  } catch (error) {
    console.error("Error fetching skill categories from API:", error);
    throw error;
  }
};

export const fetchProjects = async (): Promise<Project[]> => {
  console.log("Attempting to fetch projects from API...");
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Successfully fetched projects from API");
    return data;
  } catch (error) {
    console.error("Error fetching projects from API:", error);
    throw error;
  }
};
