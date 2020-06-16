using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace WebAngular.Interface
{
    public class Identity
    {
        [FromHeader]
        public string Username { get; set; }
        [FromHeader]
        public string Password { get; set; }
    }
}