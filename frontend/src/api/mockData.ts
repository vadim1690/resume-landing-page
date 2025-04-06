import {
  PersonalInfo,
  NavLink,
  SocialLink,
  Experience,
  Education,
  SkillCategory,
  Project,
} from "../types";

// Resume data for Vadim Lazarevich
export const defaultData = {
  userId: 1,
  name: "Vadim Lazarevich",
  email: "vadim@example.com",
  personalInfo: {
    name: "Vadim Lazarevich",
    role: "Full Stack Developer",
    email: "vadim@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "Passionate full stack developer with expertise in modern web technologies",
    summary:
      "Experienced in building applications with React, Node.js, and TypeScript.",
  } as PersonalInfo,
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ] as NavLink[],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/vadim", icon: "fab fa-github" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/vadim",
      icon: "fab fa-linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/vadim",
      icon: "fab fa-twitter",
    },
  ] as SocialLink[],
  experiences: [
    {
      company: "Tech Corp",
      role: "Senior Full Stack Developer",
      period: "2020 - Present",
      description: [
        "Leading development of enterprise web applications",
        "Mentoring junior developers",
        "Implementing CI/CD pipelines",
      ],
      location: "New York, USA",
      technologies: ["React", "Node.js", "TypeScript", "Azure"],
    } as Experience,
    {
      company: "StartUp Inc",
      role: "Full Stack Developer",
      period: "2018 - 2020",
      description: [
        "Developed and maintained multiple web applications",
        "Worked in an agile team environment",
      ],
      location: "San Francisco, USA",
      technologies: ["Angular", "Python", "Django", "AWS"],
    } as Experience,
  ],
  education: [
    {
      school: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2014 - 2018",
      location: "New York, USA",
      gpa: "3.8/4.0",
      achievements: ["Graduated with honors", "Dean's List all semesters"],
    },
  ] as Education[],
  skillCategories: [
    {
      title: "Frontend",
      skills: ["React", "Angular", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "C#", "SQL", "MongoDB"],
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "Azure", "AWS", "CI/CD"],
    },
  ] as SkillCategory[],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/vadim/ecommerce",
      liveUrl: "https://ecommerce.example.com",
      image: "https://example.com/ecommerce.jpg",
      category: "fullstack",
    } as Project,
    {
      title: "Task Management App",
      description: "Collaborative task management application",
      technologies: ["Angular", "Python", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/vadim/taskmanager",
      liveUrl: "https://taskmanager.example.com",
      image: "https://example.com/taskmanager.jpg",
      category: "fullstack",
    } as Project,
  ],
};
