export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  location?: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa?: string;
  achievements?: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "backend" | "fullstack" | "mobile" | "other";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  summary: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
