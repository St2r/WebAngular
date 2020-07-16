using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class LikeComment
    {
        [Key] public string Id { get; set; }
        public string CommentId { get; set; }
        public string UserId { get; set; }
        public int status { get; set; }
    }
}
