using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Comment
    {
        public int Id { get; set; }
        public int AuthorId { get; set; }
        public int ArticleId { get; set; }
        public DateTime CreateTime { get; set; }
        public string Content { get; set; }
        public string AvatarUrl { get; set; }
    }
}
