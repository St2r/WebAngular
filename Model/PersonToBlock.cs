using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class PersonToBlock
    {
        [Key] public string Id { get; set; }
        public string UserName { get; set; }
        public string BlockName { get; set; }
    }
}
