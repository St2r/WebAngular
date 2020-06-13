using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public int AuthorId { get; set; }
        public string ArticleId { get; set; }
        public bool IsPinned { get; set; }
        public bool IsElite { get; set; }
        public int Browse { get; set; }

        public DateTime LastReviewTime { get; set; }
    }
}
