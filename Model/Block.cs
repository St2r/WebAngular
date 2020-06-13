using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Block
    {
        [Key] public string BlockName { get; set; }
        public string AvatarUrl { get; set; }

    }
}
