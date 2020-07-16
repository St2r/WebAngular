using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Focus
    {
        [Key] public string Id { get; set; }
        public string BeFocusd { get; set; }
        public string Follower { get; set; }
    }
}
