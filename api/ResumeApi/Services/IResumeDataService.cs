using ResumeApi.Models;

namespace ResumeApi.Services
{
    public interface IResumeDataService
    {
        PersonalInfo GetPersonalInfo();
        List<NavLink> GetNavLinks();
        List<SocialLink> GetSocialLinks();
        List<Experience> GetExperiences();
        List<Education> GetEducation();
        List<SkillCategory> GetSkillCategories();
        List<Project> GetProjects();
    }
}