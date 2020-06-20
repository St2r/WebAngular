namespace WebAngular.Interface
{
    public class InterfaceComment
    {
        public int CommentId { get; set; }
        // 评论所引用的评论Id
        public int ReferenceId { get; set; }
        
        public string Username { get; set; }
        public string NickName { get; set; }
        public string AvatarUrl { get; set; }
        
        public string Content { get; set; }
        public int Likes { get; set; }
        
        public int LikeStatus { get; set; }
        
        // yyyy-mm-dd-hh-mm
        public string CommentTime { get; set; }
    }
}