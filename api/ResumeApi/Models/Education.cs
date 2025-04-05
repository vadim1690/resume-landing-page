namespace ResumeApi.Models
{
    public class Education
    {
        public string School { get; set; }
        public string Degree { get; set; }
        public string Field { get; set; }
        public string Period { get; set; }
        public string Location { get; set; }
        public string Gpa { get; set; }
        public List<string> Achievements { get; set; }
    }
}