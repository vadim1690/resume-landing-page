import { Experience, Education, Project, SocialLink, NavLink } from "../types";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  UserIcon,
  ChartBarIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// Basic Information
export const personalInfo = {
  name: "Vadim Lazarevich",
  role: "Full Stack Developer",
  email: "vadim169@gmail.com",
  phone: "0547662475",
  location: "Israel",
  bio: "Full Stack Developer passionate about creating beautiful and functional web applications",
};

// Navigation Links
export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/vadim1690",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/VadimLaz",
    icon: "linkedin",
  },
];

// Navigation Section Icons
export const sectionIcons = {
  about: UserIcon,
  skills: ChartBarIcon,
  projects: CodeBracketIcon,
  experience: BriefcaseIcon,
  education: AcademicCapIcon,
  contact: EnvelopeIcon,
};

// Work Experience
export const experiences: Experience[] = [
  {
    company: "Advice",
    role: "Full Stack Developer",
    period: "2023 - present",
    description: [
      "Architected a microservices-based .NET solution (CI/Docker, Redis, RabbitMQ, SQL Server, MongoDB, Entity Framework) using asynchronous and parallel processing to boost throughput, scalability, and ensure robust data consistency in critical operations. Optimized average response times from 1-2 seconds to 200-300ms.",
      "Led React Development (React, TypeScript, Redux) initiatives while mentoring and supporting two teammates in improving their skills and contributions.",
      "Implemented CI/CD & Monitoring (GitHub Actions), reducing deployment errors by 80% and release times by 50%.",
      "Maintained a strong DevOps focus on .NET best practices, enabling production-ready features within a month.",
    ],
    technologies: [
      "C#",
      ".NET",
      "React",
      "TypeScript",
      "Docker",
      "Redis",
      "RabbitMQ",
      "SQL Server",
      "MongoDB",
      "Entity Framework",
      "GitHub Actions",
    ],
  },
  {
    company: "easy-sale",
    role: "Software Developer",
    period: "2022 - 2023",
    description: [
      "Developed Backend services using C#/.NET (WCF, .NET Core, .NET Core) improving in-house tooling and usability.",
      "Built Android Apps in Java with REST/APIs & SQLite, ensuring seamless offline/online functionality.",
      "Automated Testing with JUnit increasing code coverage to 80% and reducing defects.",
    ],
    technologies: [
      "C#",
      ".NET",
      "Java",
      "Android",
      "REST APIs",
      "SQLite",
      "JUnit",
    ],
  },
];

// Education
export const education: Education[] = [
  {
    school: "Afeka Tel Aviv Academic College of Engineering",
    degree: "Bachelor's",
    field: "Software Engineering",
    period: "2019 - 2023",
    location: "Tel Aviv, Israel",
    gpa: "GPA 93/100",
    achievements: [
      "Graduated with honors",
      "Specialized in software development and system architecture",
      "Completed multiple projects using C#, .NET, React, and other technologies",
      "Collaborated on team projects, implementing agile methodologies",
    ],
  },
];

// Skill Categories
export const skillCategories = [
  {
    title: "Languages/Frameworks",
    skills: [
      "C#",
      ".NET Core",
      "Java",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Redux",
      "Python",
      "FastAPI",
      "Entity Framework",
    ],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "PostgreSQL", "SQLite", "Redis", "MongoDB"],
  },
  {
    title: "DevOps",
    skills: [
      "Docker",
      "GitHub Actions",
      "RabbitMQ",
      "CI/CD",
      "JUnit",
      "Mockito",
    ],
  },
  {
    title: "Architecture",
    skills: ["3-tier architecture", "Microservices", "REST APIs", "CQRS"],
  },
];

// Projects
export const projects: Project[] = [
  {
    title: "Microservices Architecture",
    description:
      "Designed and implemented a scalable microservices architecture for a business management platform. Reduced average response times from 1-2 seconds to 200-300ms through asynchronous processing.",
    image:
      "https://via.placeholder.com/600x400?text=Microservices+Architecture",
    technologies: [
      "C#",
      ".NET",
      "Docker",
      "Redis",
      "RabbitMQ",
      "SQL Server",
      "MongoDB",
    ],
    githubUrl: "https://github.com/vadim1690",
    category: "backend",
  },
  {
    title: "React Admin Dashboard",
    description:
      "Developed a responsive admin dashboard with real-time data visualization, role-based access control, and integration with backend REST APIs.",
    image: "https://via.placeholder.com/600x400?text=React+Admin+Dashboard",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/vadim1690",
    category: "web",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce solution with secure payment processing, inventory management, and a responsive user interface for browsing products.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
    technologies: [
      "React",
      "C#",
      ".NET Core",
      "Entity Framework",
      "SQL Server",
      "Stripe API",
    ],
    githubUrl: "https://github.com/vadim1690",
    category: "fullstack",
  },
  {
    title: "Mobile App for Retail",
    description:
      "Created a mobile app for retail stores that works seamlessly both online and offline, with synchronization capabilities when connectivity is restored.",
    image: "https://via.placeholder.com/600x400?text=Mobile+App",
    technologies: ["Java", "Android", "SQLite", "REST APIs", "JUnit"],
    githubUrl: "https://github.com/vadim1690",
    category: "web",
  },
];
