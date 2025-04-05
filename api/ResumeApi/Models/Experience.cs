namespace ResumeApi.Models
{
    public class Experience
    {
        public string Company { get; set; }
        public string Role { get; set; }
        public string Period { get; set; }
        public List<string> Description { get; set; }
        public List<string> Technologies { get; set; }
    }
} 