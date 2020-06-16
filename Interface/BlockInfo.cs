namespace WebAngular.Interface
{
    public class BlockInfo
    {
        public string BlockName { get; set; }
            
        public string AvatarUrl { get; set; }
        public int AccessRight { get; set; }
            
        public bool IsFollowed { get; set; }
            
        public int ContentTotal { get; set; }
        public int FollowTotal { get; set; }
        public int TodayTotal { get; set; }
            
        public UserBaseInfo[] Admins { get; set; }
    }
}