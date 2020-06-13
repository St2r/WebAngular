using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Comment
    {
        [Key] public int Id { get; set; }
        public string AuthorId { get; set; }
        public string ArticleId { get; set; }
        public DateTime CreateTime { get; set; }
        public string Content { get; set; }
        public string AvatarUrl { get; set; }
    }
}
