using Microsoft.Extensions.Caching.Memory;
using ResumeApi.Models;

namespace ResumeApi.Services
{
    public class ResumeDataService
    {
        private readonly IMemoryCache _cache;
        private readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(30);

        public ResumeDataService(IMemoryCache cache)
        {
            _cache = cache;
        }

        // Get personal info with caching
        public PersonalInfo GetPersonalInfo()
        {
            return _cache.GetOrCreate("personalInfo", entry =>
            {
                entry.SlidingExpiration = _cacheDuration;
                return CreatePersonalInfo();
            });
        }

        // Get nav links with caching
        public List<NavLink> GetNavLinks()
        {
            return _cache.GetOrCreate("navLinks", entry =>
            {
                entry.SlidingExpiration = _cacheDuration;
                return CreateNavLinks();
            });
        }

        // Get social links with caching
        public List<SocialLink> GetSocialLinks()
        {
            return _cache.GetOrCreate("socialLinks", entry =>
            {
                entry.SlidingExpiration = _cacheDuration;
                return CreateSocialLinks();
            });
        }

        // Get experiences with caching
        public List<Experience> GetExperiences()
        {
            return _cache.GetOrCreate("experiences", entry =>
            {
                entry.SlidingExpiration = _cacheDuration;
                return CreateExperiences();
            });
        }

        // Get education with caching
        public List<Education> GetEducation()
        {
            return _cache.GetOrCreate("education", entry =>
            {
                entry.SlidingExpiration = _cacheDuration;
                return CreateEducation();
            });
        }

        // Get skill categories with caching
        public List<SkillCategory> GetSkillCategories()
        {
            return _cache.GetOrCreate("skillCategories", entry =>
            {
                entry.SlidingExpiration = _cacheDuration;
                return CreateSkillCategories();
            });
        }

        // Get projects with caching
        public List<Project> GetProjects()
        {
            return _cache.GetOrCreate("projects", entry =>
            {
                entry.SlidingExpiration = _cacheDuration;
                return CreateProjects();
            });
        }

        #region Data Creation Methods

        private PersonalInfo CreatePersonalInfo()
        {
            return new PersonalInfo
            {
                Name = "Vadim Lazarevich",
                Role = "Full Stack Developer",
                Email = "vadim169@gmail.com",
                Phone = "0547662475",
                Location = "Israel",
                Bio = "Full Stack Developer passionate about creating beautiful and functional web applications"
            };
        }

        private List<NavLink> CreateNavLinks()
        {
            return new List<NavLink>
            {
                new NavLink { Name = "About", Href = "#about" },
                new NavLink { Name = "Skills", Href = "#skills" },
                new NavLink { Name = "Projects", Href = "#projects" },
                new NavLink { Name = "Experience", Href = "#experience" },
                new NavLink { Name = "Education", Href = "#education" },
                new NavLink { Name = "Contact", Href = "#contact" }
            };
        }

        private List<SocialLink> CreateSocialLinks()
        {
            return new List<SocialLink>
            {
                new SocialLink { Name = "GitHub", Url = "https://github.com/vadim1690", Icon = "github" },
                new SocialLink { Name = "LinkedIn", Url = "https://www.linkedin.com/in/VadimLaz", Icon = "linkedin" }
            };
        }

        private List<Experience> CreateExperiences()
        {
            return new List<Experience>
            {
                new Experience
                {
                    Company = "Advice",
                    Role = "Full Stack Developer",
                    Period = "2023 - present",
                    Description = new List<string>
                    {
                        "Architected a microservices-based .NET solution (CI/Docker, Redis, RabbitMQ, SQL Server, MongoDB, Entity Framework) using asynchronous and parallel processing to boost throughput, scalability, and ensure robust data consistency in critical operations. Optimized average response times from 1-2 seconds to 200-300ms.",
                        "Led React Development (React, TypeScript, Redux) initiatives while mentoring and supporting two teammates in improving their skills and contributions.",
                        "Implemented CI/CD & Monitoring (GitHub Actions), reducing deployment errors by 80% and release times by 50%.",
                        "Maintained a strong DevOps focus on .NET best practices, enabling production-ready features within a month."
                    },
                    Technologies = new List<string>
                    {
                        "C#", ".NET", "React", "TypeScript", "Docker", "Redis", "RabbitMQ", "SQL Server", "MongoDB", "Entity Framework", "GitHub Actions"
                    }
                },
                new Experience
                {
                    Company = "easy-sale",
                    Role = "Software Developer",
                    Period = "2022 - 2023",
                    Description = new List<string>
                    {
                        "Developed Backend services using C#/.NET (WCF, .NET Core, .NET Core) improving in-house tooling and usability.",
                        "Built Android Apps in Java with REST/APIs & SQLite, ensuring seamless offline/online functionality.",
                        "Automated Testing with JUnit increasing code coverage to 80% and reducing defects."
                    },
                    Technologies = new List<string>
                    {
                        "C#", ".NET", "Java", "Android", "REST APIs", "SQLite", "JUnit"
                    }
                }
            };
        }

        private List<Education> CreateEducation()
        {
            return new List<Education>
            {
                new Education
                {
                    School = "Afeka Tel Aviv Academic College of Engineering",
                    Degree = "Bachelor's",
                    Field = "Software Engineering",
                    Period = "2019 - 2023",
                    Location = "Tel Aviv, Israel",
                    Gpa = "GPA 93/100",
                    Achievements = new List<string>
                    {
                        "Graduated with honors",
                        "Specialized in software development and system architecture",
                        "Completed multiple projects using C#, .NET, React, and other technologies",
                        "Collaborated on team projects, implementing agile methodologies"
                    }
                }
            };
        }

        private List<SkillCategory> CreateSkillCategories()
        {
            return new List<SkillCategory>
            {
                new SkillCategory
                {
                    Title = "Languages/Frameworks",
                    Skills = new List<string>
                    {
                        "C#", ".NET Core", "Java", "React", "JavaScript", "TypeScript", "HTML", "CSS", "Redux", "Python", "FastAPI", "Entity Framework"
                    }
                },
                new SkillCategory
                {
                    Title = "Databases",
                    Skills = new List<string>
                    {
                        "SQL Server", "PostgreSQL", "SQLite", "Redis", "MongoDB"
                    }
                },
                new SkillCategory
                {
                    Title = "DevOps",
                    Skills = new List<string>
                    {
                        "Docker", "GitHub Actions", "RabbitMQ", "CI/CD", "JUnit", "Mockito"
                    }
                },
                new SkillCategory
                {
                    Title = "Architecture",
                    Skills = new List<string>
                    {
                        "3-tier architecture", "Microservices", "REST APIs", "CQRS"
                    }
                }
            };
        }

        private List<Project> CreateProjects()
        {
            return new List<Project>
            {
                new Project
                {
                    Title = "Microservices Architecture",
                    Description = "Designed and implemented a scalable microservices architecture for a business management platform. Reduced average response times from 1-2 seconds to 200-300ms through asynchronous processing.",
                    Image = "https://via.placeholder.com/600x400?text=Microservices+Architecture",
                    Technologies = new List<string>
                    {
                        "C#", ".NET", "Docker", "Redis", "RabbitMQ", "SQL Server", "MongoDB"
                    },
                    GithubUrl = "https://github.com/vadim1690",
                    Category = "backend"
                },
                new Project
                {
                    Title = "React Admin Dashboard",
                    Description = "Developed a responsive admin dashboard with real-time data visualization, role-based access control, and integration with backend REST APIs.",
                    Image = "https://via.placeholder.com/600x400?text=React+Admin+Dashboard",
                    Technologies = new List<string>
                    {
                        "React", "TypeScript", "Redux", "Tailwind CSS", "Chart.js"
                    },
                    GithubUrl = "https://github.com/vadim1690",
                    Category = "web"
                },
                new Project
                {
                    Title = "E-Commerce Platform",
                    Description = "Built a full-stack e-commerce solution with secure payment processing, inventory management, and a responsive user interface for browsing products.",
                    Image = "https://via.placeholder.com/600x400?text=E-Commerce+Platform",
                    Technologies = new List<string>
                    {
                        "React", "C#", ".NET Core", "Entity Framework", "SQL Server", "Stripe API"
                    },
                    GithubUrl = "https://github.com/vadim1690",
                    Category = "fullstack"
                },
                new Project
                {
                    Title = "Mobile App for Retail",
                    Description = "Created a mobile app for retail stores that works seamlessly both online and offline, with synchronization capabilities when connectivity is restored.",
                    Image = "https://via.placeholder.com/600x400?text=Mobile+App",
                    Technologies = new List<string>
                    {
                        "Java", "Android", "SQLite", "REST APIs", "JUnit"
                    },
                    GithubUrl = "https://github.com/vadim1690",
                    Category = "web"
                }
            };
        }

        #endregion
    }
}