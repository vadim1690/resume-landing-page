// Define interfaces for our resume data types

export interface PersonalInfo {
  id?: number;
  userId?: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  summary: string;
}

export interface NavLink {
  id?: number;
  userId?: string;
  name: string;
  href: string;
}

export interface SocialLink {
  id?: number;
  userId?: string;
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id?: number;
  userId?: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id?: number;
  userId?: string;
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa: string;
  achievements: string[];
}

export interface SkillCategory {
  id?: number;
  userId?: string;
  title: string;
  skills: string[];
}

export interface Project {
  id?: number;
  userId?: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "web" | "backend" | "fullstack" | "mobile" | "other";
}
