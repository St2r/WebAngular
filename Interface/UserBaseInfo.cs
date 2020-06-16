namespace WebAngular.Interface
{
    public class UserBaseInfo
    {
        public string Username { get; set; }
        public string Nickname { get; set; }
        public string AvatarUrl { get; set; }
        public string Brief { get; set; }
        public bool IsFollowed { get; set; }
        public bool IsFan { get; set; }
    }
}