namespace ResumeApi.Models
{
    public class Project
    {
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Image { get; set; }
        public required List<string> Technologies { get; set; } = new();
        public required string GithubUrl { get; set; }
        public required string Category { get; set; }
    }
}