using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace WebAngular.Interface
{
    public class InterfaceIdentity
    {
        [FromHeader]
        public string Username { get; set; }
        [FromHeader]
        public string Password { get; set; }

        public bool CheckIdentity()
        {
            // todo 进行用户的身份验证
            if (Username == null || Password == null)
            {
                return false;
            }
            return this.Username.Equals(this.Password);
        }
    }
}