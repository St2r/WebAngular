namespace WebAngular.Model
{
    public class ArticleInfo
    {
        public string Title { get; set; }
        public string Header { get; set; }
        public string CoverUrl { get; set; }

        public int Like { get; set; }
        public int Review { get; set; }
        public int Browse { get; set; }
        public int Star { get; set; }

        public string LastReviewTime { get; set; }

        public string Username { get; set; }
        public string Nickname { get; set; }
        public string AvatarUrl { get; set; }

        public bool IsPinned { get; set; }
        public bool IsElite { get; set; }
    }
}