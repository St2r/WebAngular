using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class ArticleToTag
    {
        public int Id { get; set; }
        public int TagId { get; set; }
        public int ArticleId { get; set; }
    }
}
