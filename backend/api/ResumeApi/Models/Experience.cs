namespace ResumeApi.Models
{
    public class Experience
    {
        public required string Company { get; set; }
        public required string Role { get; set; }
        public required string Period { get; set; }
        public required List<string> Description { get; set; } = new();
        public required List<string> Technologies { get; set; } = new();
    }
}