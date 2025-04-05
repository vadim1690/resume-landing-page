using Microsoft.AspNetCore.Mvc;
using Moq;
using ResumeApi.Controllers;
using ResumeApi.Models;
using ResumeApi.Services;
using Xunit;

namespace ResumeApi.Tests.Controllers
{
    public class ResumeControllerTests
    {
        private readonly Mock<IResumeDataService> _mockDataService;
        private readonly ResumeController _controller;

        public ResumeControllerTests()
        {
            _mockDataService = new Mock<IResumeDataService>();
            _controller = new ResumeController(_mockDataService.Object);
        }

        [Fact]
        public void GetPersonalInfo_ReturnsOkResult()
        {
            // Arrange
            var mockPersonalInfo = new PersonalInfo
            {
                Name = "John Doe",
                Role = "Software Developer",
                Email = "john@example.com",
                Phone = "123-456-7890",
                Location = "New York",
                Bio = "Experienced software developer with a passion for clean code"
            };

            _mockDataService.Setup(service => service.GetPersonalInfo())
                .Returns(mockPersonalInfo);

            // Act
            var result = _controller.GetPersonalInfo();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnValue = Assert.IsType<PersonalInfo>(okResult.Value);
            Assert.Equal(mockPersonalInfo.Name, returnValue.Name);
            Assert.Equal(mockPersonalInfo.Role, returnValue.Role);
        }

        [Fact]
        public void GetAllData_ReturnsOkResult()
        {
            // Arrange
            _mockDataService.Setup(service => service.GetPersonalInfo())
                .Returns(new PersonalInfo
                {
                    Name = "John Doe",
                    Role = "Software Developer",
                    Email = "john@example.com",
                    Phone = "123-456-7890",
                    Location = "New York",
                    Bio = "Experienced software developer with a passion for clean code"
                });

            _mockDataService.Setup(service => service.GetNavLinks())
                .Returns(new List<NavLink>());

            _mockDataService.Setup(service => service.GetSocialLinks())
                .Returns(new List<SocialLink>());

            _mockDataService.Setup(service => service.GetExperiences())
                .Returns(new List<Experience>());

            _mockDataService.Setup(service => service.GetEducation())
                .Returns(new List<Education>());

            _mockDataService.Setup(service => service.GetSkillCategories())
                .Returns(new List<SkillCategory>());

            _mockDataService.Setup(service => service.GetProjects())
                .Returns(new List<Project>());

            // Act
            var result = _controller.GetAllData();

            // Assert
            Assert.IsType<OkObjectResult>(result.Result);
        }
    }
}