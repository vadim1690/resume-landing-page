namespace ResumeApi.Models
{
    public class Education
    {
        public required string School { get; set; }
        public required string Degree { get; set; }
        public required string Field { get; set; }
        public required string Period { get; set; }
        public required string Location { get; set; }
        public required string Gpa { get; set; }
        public required List<string> Achievements { get; set; } = new();
    }
}