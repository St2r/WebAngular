using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class LikeComment
    {
        public int Id { get; set; }
        public int CommentId { get; set; }
        public int UserId { get; set; }
    }
}
