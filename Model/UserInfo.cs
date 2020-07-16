namespace WebAngular.Model
{
    public class UserInfo
    {
        public string Username { get; set; }
        public string Nickname { get; set; }
        public string AvatarUrl { get; set; }
        public string Brief { get; set; }

        public int Follow { get; set; }
        public int Fans { get; set; }
        public int Level { get; set; }
        public int Articles { get; set; }
        public int Browse { get; set; }
        public int Like { get; set; }
        public int Star { get; set; }

        public bool IsFollowed { get; set; }
        public bool IsFan { get; set; }
    }
}