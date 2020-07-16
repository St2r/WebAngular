using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Question
    {
        [Key] public string Id { get; set; }
        public string Title { get; set; }
        public string Answer { get; set; }
        public string Content { get; set; }
        public int Type { get; set; }
        public string Analysis { get; set; }
    }
}
