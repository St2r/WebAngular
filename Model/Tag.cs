using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class Tag
    {
        [Key] public string TagId { get; set; }
        public string TagName { get; set; }
    }
}
