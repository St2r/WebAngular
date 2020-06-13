using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Question
    {
        public int Id { get; set; }
        public int Title { get; set; }
        public string Answer { get; set; }
        public string Content { get; set; }
        public int Type { get; set; }
        public string Analysis { get; set; }
    }
}
