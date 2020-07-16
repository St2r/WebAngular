using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Article
    {
        //public int Id { get; set; }
        public string Title { get; set; }
		public string Block {get;set;} = "Discus";
        public string Header { get; set; }
        public string Content { get; set; }
        public string AuthorId { get; set; }
        [Key] public string ArticleId { get; set; } 
        public bool IsPinned { get; set; } = false;
        public bool IsElite { get; set; } = false;
        public int Browse { get; set; } = 0;
        public string AvatarUrl { get; set; } = "/avatar.png";

        public DateTime LastReviewTime { get; set; }
        public string CoverUrl { get; internal set; }
    }
}
