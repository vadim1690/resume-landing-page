namespace ResumeApi.Models
{
    public class SkillCategory
    {
        public required string Title { get; set; }
        public required List<string> Skills { get; set; } = new();
    }
}