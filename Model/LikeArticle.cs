using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class LikeArticle
    {
        [Key] public string Id { get; set; }
        public string ArticleId { get; set; }
        public string UserId { get; set; }
        public int status { get; set; }
    }
}
