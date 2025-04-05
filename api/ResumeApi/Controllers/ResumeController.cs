using Microsoft.AspNetCore.Mvc;
using ResumeApi.Models;
using ResumeApi.Services;

namespace ResumeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResumeController : ControllerBase
    {
        private readonly ResumeDataService _resumeDataService;

        public ResumeController(ResumeDataService resumeDataService)
        {
            _resumeDataService = resumeDataService;
        }

        [HttpGet("personalInfo")]
        public ActionResult<PersonalInfo> GetPersonalInfo()
        {
            return Ok(_resumeDataService.GetPersonalInfo());
        }

        [HttpGet("navLinks")]
        public ActionResult<List<NavLink>> GetNavLinks()
        {
            return Ok(_resumeDataService.GetNavLinks());
        }

        [HttpGet("socialLinks")]
        public ActionResult<List<SocialLink>> GetSocialLinks()
        {
            return Ok(_resumeDataService.GetSocialLinks());
        }

        [HttpGet("experiences")]
        public ActionResult<List<Experience>> GetExperiences()
        {
            return Ok(_resumeDataService.GetExperiences());
        }

        [HttpGet("education")]
        public ActionResult<List<Education>> GetEducation()
        {
            return Ok(_resumeDataService.GetEducation());
        }

        [HttpGet("skillCategories")]
        public ActionResult<List<SkillCategory>> GetSkillCategories()
        {
            return Ok(_resumeDataService.GetSkillCategories());
        }

        [HttpGet("projects")]
        public ActionResult<List<Project>> GetProjects()
        {
            return Ok(_resumeDataService.GetProjects());
        }

        [HttpGet("all")]
        public ActionResult<object> GetAllData()
        {
            var data = new
            {
                personalInfo = _resumeDataService.GetPersonalInfo(),
                navLinks = _resumeDataService.GetNavLinks(),
                socialLinks = _resumeDataService.GetSocialLinks(),
                experiences = _resumeDataService.GetExperiences(),
                education = _resumeDataService.GetEducation(),
                skillCategories = _resumeDataService.GetSkillCategories(),
                projects = _resumeDataService.GetProjects()
            };

            return Ok(data);
        }
    }
}