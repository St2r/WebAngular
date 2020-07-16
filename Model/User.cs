using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAngular.Model
{
    public class User
    {
        //public int Id { get; set; }
        [Key] public string UserName { get; set; }
        public string NickName { get; set; }
        public string PassWord { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; } = DateTime.Today;
        public DateTime CreateTime { get; set; } = DateTime.Now;
        public string AvatarUrl { get; set; } = "/avatar.png";
        public string Brief { get; set; }
        public int Point { get; set; } = 0;
        public int Browse { get; set; } = 0;
        public int LoginCount { get; set; } = 0;
        public int Level { get; set; } = 0;
    }
}
