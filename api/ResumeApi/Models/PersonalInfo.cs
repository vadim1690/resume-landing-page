namespace ResumeApi.Models
{
    public class PersonalInfo
    {
        public required string Name { get; set; }
        public required string Role { get; set; }
        public required string Email { get; set; }
        public required string Phone { get; set; }
        public required string Location { get; set; }
        public required string Bio { get; set; }
    }
}